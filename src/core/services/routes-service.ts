export function replaceRouteLink(route: string, replace: { [id: string]: any }): string {
    let link: string = route.replace(/\(.*?\)/ig, '');
    for (const key in replace) {
        if (replace.hasOwnProperty(key)) {
            const reg: RegExp = new RegExp(`:${key}`);
            const replaceValue: string = replace[key] ? replace[key] : '';
            link = link.replace(reg, replaceValue);
        }
    }
    return validateRouteLink(link);
}

export function validateRouteLink(link: string): string {
    return (link.slice(-2) === '//') ? link.slice(0, -1) : link;
}

export * as RoutesService from './routes-service';
