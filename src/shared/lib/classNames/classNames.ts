type Mods = string[] | Record<string, string | boolean>;

export default function classNames (cls: string, additional: Mods): string {
    const arr = Array.isArray(additional)
        ? additional
        : Object.entries(additional)
            .filter(([key, value]) => Boolean(value))
            .map(([key]) => key);

    return [cls, ...arr].join(" ");
}
