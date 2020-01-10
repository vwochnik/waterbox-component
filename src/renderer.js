import { TinyColor } from '@ctrl/tinycolor';

export const OPTIONS = ['width', 'height', 'borderColor', 'fillColor', 'backgroundColor', 'borderWidth', 'separators', 'drawTop', 'value'];

export default function renderer(ctx, options) {
    const { width, height, borderColor, fillColor, backgroundColor, borderWidth, separators, drawTop, value } = options;

    const backgroundColorLight = (new TinyColor(backgroundColor)).brighten(20).toString(),
          backgroundColorDark = (new TinyColor(backgroundColor)).darken(20).toString(),
          fillColorLight = (new TinyColor(fillColor)).brighten(20).toString(),
          fillColorDark = (new TinyColor(fillColor)).darken(20).toString();

    ctx.clearRect(0, 0, options.width, options.height);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;

    const rect = { x: borderWidth/2, y: borderWidth/2, w: width - borderWidth - 1, h: height - borderWidth - 1 },
          size = { w: rect.w, h: rect.w/2 };

    let area;

    area = { x: rect.x, y: rect.y + rect.h - size.h, w: size.w, h: size.h };
    rhombusPath(ctx, area);
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.stroke();

    area = { x: rect.x, y: rect.y, w: size.w/2, h: rect.h };
    wallPath(ctx, area, size, 0, -size.h/2);
    ctx.fillStyle = backgroundColorLight;
    ctx.fill();
    ctx.stroke();

    area = { x: rect.x+rect.w/2, y: rect.y, w: size.w/2, h: rect.h };
    wallPath(ctx, area, size, -size.h/2, 0);
    ctx.fillStyle = backgroundColorDark;
    ctx.fill();
    ctx.stroke();


    area = { x: rect.x, y: rect.y, w: size.w/2, h: rect.h };
    wallPath(ctx, area, size, 0, size.h/2);
    ctx.fillStyle = fillColorDark;
    ctx.fill();
    ctx.stroke();

    area = { x: rect.x+rect.w/2, y: rect.y, w: size.w/2, h: rect.h };
    wallPath(ctx, area, size, size.h/2, 0);
    ctx.fillStyle = fillColorLight;
    ctx.fill();
    ctx.stroke();
}

function rhombusPath(ctx, area) {
    ctx.beginPath();
    ctx.moveTo(area.x+area.w/2, area.y);
    ctx.lineTo(area.x+area.w, area.y+area.h/2);
    ctx.lineTo(area.x+area.w/2, area.y+area.h);
    ctx.lineTo(area.x,area.y+area.h/2);
    ctx.closePath();
}

function wallPath(ctx, area, size, leftOffset, rightOffset) {
    ctx.beginPath();
    ctx.moveTo(area.x, area.y+size.h/2+leftOffset);
    ctx.lineTo(area.x+area.w, area.y+size.h/2+rightOffset);
    ctx.lineTo(area.x+area.w, area.y+area.h-size.h/2+rightOffset);
    ctx.lineTo(area.x, area.y+area.h-size.h/2+leftOffset);
    ctx.closePath();
}

/*
            #region draw scala
            // draws scala each 100 / separators percentual step
            if (Separators > 0)
            {
                int step = (int)(100.0 / (double)Separators);

                for (int s = step; s < 100; s += step)
                {
                    // the area
                    RectangleF area = new RectangleF(
                        rect.X, rect.Y + rect.Height - size.Height - (rect.Height - size.Height) * (s / 100F),
                        size.Width, size.Height);

                    // draw only the top edge
                    g.DrawLine(
                        new Pen(BorderColor, BorderWidth),
                        area.X + area.Width / 2F - area.Width / 2F * SeparatorWidth / 100F, area.Y + area.Height / 2F * SeparatorWidth / 100F,
                        area.X + area.Width / 2F, area.Y);
                    g.DrawLine(
                        new Pen(BorderColor, BorderWidth),
                        area.X + area.Width / 2F + area.Width / 2F * SeparatorWidth / 100F, area.Y + area.Height / 2F * SeparatorWidth / 100F,
                        area.X + area.Width / 2F, area.Y);
                }
            }
            #endregion
            #region draw top wall
            // draws the front water's wall
            if (Value > 0)
            {
                // the area
                RectangleF area = new RectangleF(
                    rect.X, rect.Y + rect.Height - size.Height - (rect.Height - size.Height) * (Value / 100F),
                    rect.Width, size.Height + (rect.Height - size.Height) * (Value / 100F));

                // the isometric figure
                GraphicsPath path = new GraphicsPath();
                path.AddLine(
                    area.X, area.Y + size.Height / 2F,
                    area.X + area.Width / 2F, area.Y + size.Height);
                path.AddLine(
                    area.X + area.Width / 2F, area.Y + size.Height,
                    area.X + area.Width, area.Y + size.Height / 2F);
                path.AddLine(
                    area.X + area.Width, area.Y + area.Height - size.Height / 2F,
                    area.X + area.Width / 2F, area.Y + area.Height);
                path.AddLine(
                    area.X + area.Width / 2F, area.Y + area.Height,
                    area.X, area.Y + area.Height - size.Height / 2F);
                path.CloseFigure();

                // draw figure with light and dark water color
                g.SetClip(new RectangleF(rect.X, rect.Y, rect.Width / 2F, rect.Height));
                g.FillPath(new SolidBrush(DarkFillColor), path);
                g.SetClip(new RectangleF(rect.X + rect.Width / 2F, rect.Y, rect.Width / 2F, rect.Height));
                g.FillPath(new SolidBrush(LightFillColor), path);
                g.ResetClip();
                g.DrawPath(new Pen(BorderColor, BorderWidth), path);
            }
            #endregion
            #region draw fill rectangle
            // draws water's top
            if (Value > 0)
            {
                // water's height area
                RectangleF area = new RectangleF(
                    rect.X, rect.Y + rect.Height - size.Height - (rect.Height - size.Height) * (Value / 100F),
                    size.Width, size.Height);

                // isometric figure
                GraphicsPath path = new GraphicsPath();
                path.AddLine(
                    area.X, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y);
                path.AddLine(
                    area.X + area.Width, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y + area.Height);
                path.CloseFigure();

                // draw figure
                g.FillPath(new SolidBrush(MainFillColor), path);
                g.DrawPath(new Pen(BorderColor, BorderWidth), path);
            }
            #endregion
            #region draw top rectangle
            if (DrawTop)
            {
                // area
                RectangleF area = new RectangleF(
                    rect.X, rect.Y,
                    size.Width, size.Height);

                // isometric figure
                GraphicsPath path = new GraphicsPath();
                path.AddLine(
                    area.X, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y);
                path.AddLine(
                    area.X + area.Width, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y + area.Height);
                path.CloseFigure();

                // draw figure
                g.FillPath(new SolidBrush(MainBackColor), path);
                g.DrawPath(new Pen(BorderColor, BorderWidth), path);
            }
            #endregion

*/