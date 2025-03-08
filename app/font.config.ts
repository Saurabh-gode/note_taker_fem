import localFont from 'next/font/local';

export const inter = localFont({
    src: [
        { path: '/fonts/inter/static/Inter_18pt-Regular.ttf', weight: '400', style: 'normal' },
        { path: '/fonts/inter/static/Inter_18pt-Medium.ttf', weight: '500', style: 'normal' },
        { path: '/fonts/inter/static/Inter_18pt-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '/fonts/inter/static/Inter_18pt-Bold.ttf', weight: '700', style: 'normal' },
    ],
});

export const notoSerif = localFont({
    src: [
        { path: '/fonts/noto-serif/static/NotoSerif-Regular.ttf', weight: '400', style: 'normal' },
        { path: '/fonts/noto-serif/static/NotoSerif-Medium.ttf', weight: '500', style: 'normal' },
        { path: '/fonts/noto-serif/static/NotoSerif-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '/fonts/noto-serif/static/NotoSerif-Bold.ttf', weight: '700', style: 'normal' },
    ],
});

export const sourceCodePro = localFont({
    src: [
        { path: '/fonts/source-code-pro/static/SourceCodePro-Regular.ttf', weight: '400', style: 'normal' },
        { path: '/fonts/source-code-pro/static/SourceCodePro-Medium.ttf', weight: '500', style: 'normal' },
        { path: '/fonts/source-code-pro/static/SourceCodePro-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '/fonts/source-code-pro/static/SourceCodePro-Bold.ttf', weight: '700', style: 'normal' },
    ],
});

// Now you can easily import and use these fonts in your components!
// Example:
// import { inter } from '@/fonts';
// <div className={inter.className}>Hello, world!</div>
