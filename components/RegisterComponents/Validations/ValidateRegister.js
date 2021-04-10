export const emailRegex = /^[A-Za-z_123456789]{5,20}@[a-z]{2,10}[.]{1}[a-z.]{2,5}$/;
export const passRegex = /^[A-Za-z123456789]{2,20}$/;
export const nameRegex = /^[A-Za-z]{3,10}$/;
export const lastRegex = /^[A-Za-z]{3,10}$/;
export const ageRegex = /^[1234567890]{1,2}$/;

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

export const handleKeyDownFnLn = e => {
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
        e.key === '>' || 
        e.key === '1' ||
        e.key === '2' || 
        e.key === '3' ||
        e.key === '4' || 
        e.key === '5' ||
        e.key === '6' || 
        e.key === '7' ||
        e.key === '8' || 
        e.key === '9' ||
        e.key === '0' )   {
        e.preventDefault();
    }
};