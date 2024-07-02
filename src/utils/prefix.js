let prefix = process.env.hasOwnProperty('BASE_PATH') ? 
                process.env.BASE_PATH : 
                process.env.hasOwnProperty('NEXT_PUBLIC_BASE_PATH') ?
                process.env.NEXT_PUBLIC_BASE_PATH :
                "/ASD-Gradshow-2024";

if (process.env.NODE_ENV === 'development') prefix = '';

export { prefix };
