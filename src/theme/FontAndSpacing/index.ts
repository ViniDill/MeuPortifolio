export enum FontSize {
    xs = 12,
    sm = 14,
    md = 16,
    lg = 18,
    xl = 24,
    "2xl" = 34,
    "3xl" = 40,
    "4xl" = 48,
    "5xl" = 60,
  }
  
  export enum Spacing {
    none = 0,
    xs = 4,
    s = 8,
    m = 16,
    l = 24,
    xl = 32,
    "2xl" = 48,
    "3xl" = 64,
    "4xl" = 104,
    "5xl" = 120,
  }

  export default {
  
    fontSize: {
      xs: `${FontSize.xs}px`,
      sm: `${FontSize.sm}px`,
      md: `${FontSize.md}px`,
      lg: `${FontSize.lg}px`,
      xl: `${FontSize.xl}px`,
      "2xl": `${FontSize["2xl"]}px`,
      "3xl": `${FontSize["3xl"]}px`,
      "4xl": `${FontSize["4xl"]}px`,
      "5xl": `${FontSize["5xl"]}px`,
    },
  
    spacing: {
      none: `${Spacing.none}px`,
      xs: `${Spacing.xs}px`,
      s: `${Spacing.s}px`,
      m: `${Spacing.m}px`,
      l: `${Spacing.l}px`,
      xl: `${Spacing.xl}px`,
      "2xl": `${Spacing["2xl"]}px`,
      "3xl": `${Spacing["3xl"]}px`,
      "4xl": `${Spacing["4xl"]}px`,
      "5xl": `${Spacing["5xl"]}px`,
    },
  };