import tinycolor from 'tinycolor';

export const OPTIONS = ['width', 'height', 'borderColor', 'fillColor', 'backgroundColor', 'borderWidth', 'separators', 'drawTop', 'value'];

export default function renderer(ctx, options) {
	console.info({options});
}

/*
            Graphics g = e.Graphics;
            g.SmoothingMode = SmoothingMode.HighQuality;

            // all containing rectangle
            RectangleF rect = new RectangleF(BorderWidth / 2F, BorderWidth / 2F, Width - BorderWidth - 1, Height - BorderWidth - 1);

            // isometric size of the box
            SizeF size = new SizeF(rect.Width, rect.Width / 2F);

            #region draw bottom rectangle
            {
                // the isometric area containing the rhombus
                RectangleF area = new RectangleF(
                    rect.X, rect.Y + rect.Height - size.Height,
                    size.Width, size.Height);

                // the path containing figure of rhombus
                GraphicsPath path = new GraphicsPath();
                path.AddLine(
                    area.X, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y);
                path.AddLine(
                    area.X + area.Width, area.Y + area.Height / 2F,
                    area.X + area.Width / 2F, area.Y + area.Height);
                path.CloseFigure();

                // draw path
                g.FillPath(new SolidBrush(MainBackColor), path);
                g.DrawPath(new Pen(BorderColor, BorderWidth), path);
            }
            #endregion
            #region draw bottom wall
            {
                // the isometric background box wall
                // the area is hall, then rect
                GraphicsPath path = new GraphicsPath();
                path.AddLine(
                    rect.X, rect.Y + size.Height / 2F,
                    rect.X + rect.Width / 2F, rect.Y);
                path.AddLine(
                    rect.X + rect.Width / 2F, rect.Y,
                    rect.X + rect.Width, rect.Y + size.Height / 2F);
                path.AddLine(
                    rect.X + rect.Width, rect.Y + rect.Height - size.Height / 2F,
                    rect.X + rect.Width / 2F, rect.Y + rect.Height - size.Height);
                path.AddLine(
                    rect.X + rect.Width / 2F, rect.Y + rect.Height - size.Height,
                    rect.X, rect.Y + rect.Height - size.Height / 2F);
                path.CloseFigure();

                // draw path, with light and dark background color
                g.SetClip(new RectangleF(rect.X, rect.Y, rect.Width / 2F, rect.Height));
                g.FillPath(new SolidBrush(LightBackColor), path);
                g.SetClip(new RectangleF(rect.X + rect.Width / 2F, rect.Y, rect.Width / 2F, rect.Height));
                g.FillPath(new SolidBrush(DarkBackColor), path);
                g.ResetClip();
                g.DrawPath(new Pen(BorderColor, BorderWidth), path);
            }
            #endregion
            #region draw back line
            // draws background wall's edge line
            g.DrawLine(new Pen(BorderColor, BorderWidth),
                rect.X + rect.Width / 2F, rect.Y,
                rect.X + rect.Width / 2F, rect.Y + rect.Height - size.Height);
            #endregion
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