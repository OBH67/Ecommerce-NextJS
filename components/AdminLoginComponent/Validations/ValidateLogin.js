export const emailRegex = /^[A-Za-z_123456789]{5,20}@[a-z]{2,10}[.]{1}[a-z.]{2,5}$/;
export const passRegex = /^[A-Za-z123456789]{2,20}$/;

// Ilegal characters
export const handleKeyDown = e => {
    if (e.key === '!' || 
        e.key === '"' ||
        e.key === '#' || 
        e.key === '$' ||
        e.key === '%' || 
        e.key === '&' ||
        e.key === '/' || 
        e.key === '(' ||
        e.key === ')' || 
        e.key === '=' ||
        e.key === '?' || 
        e.key === '¡' ||
        e.key === '¿' || 
        e.key === '{' ||
        e.key === '}' || 
        e.key === '´' ||
        e.key === '+' || 
        e.key === '-' ||
        e.key === '^' || 
        e.key === '~' ||
        e.key === '|' || 
        e.key === ';' ||
        e.key === '[' || 
        e.key === ']' ||
        e.key === '°' || 
        e.key === '¬' ||
        e.key === '}' || 
        e.key === '´' ||
        e.key === '*'  ||
        e.key === '¨*' ||
        e.key === '^`' ||
        e.key === '`' || 
        e.key === ',' || 
        e.key === ';' ||
        e.key === '<' ||
        e.key === '>')   {
        e.preventDefault();
    }
};