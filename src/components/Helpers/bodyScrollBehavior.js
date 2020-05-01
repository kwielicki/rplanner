import { scrollBarSize } from 'Components/Helpers/scrollbarMeasure'

export const bodyBlockScroll = () => {
    /* Scrollbar width is overriden by CSS styles
     * - for mobile his value is equal to 0,
     * - otherwise his value is equal 6 - determinet by CSS
     */
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollBarSize().width > 0 ? `${6}px` : 0
}

export const bodyUnblockScroll = () => {
    document.body.style.overflow = '',
    document.body.style.paddingRight = ''
}