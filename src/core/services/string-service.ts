export enum WrapTag {
    div = 'div',
    span = 'span'
}

export function wrapSubstring(
    str: string,
    subStr: string,
    tag: WrapTag,
    className?: string
): string {
    const regExp = new RegExp(subStr, 'g');
    return str.replace(regExp, `<${tag} className="${className || ''}">${subStr}</${tag}>`);
}

export * as StringService from './string-service';
