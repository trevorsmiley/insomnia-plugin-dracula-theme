// Dracula theme
var background = '#282a36'
var currentLine = '#44475a'
var selection = '#44475a'
var foreground = '#f8f8f2'
var comment = '#6272a4'
var cyan = '#8be9fd'
var green = '#50fa7b'
var orange = '#ffb86c'
var pink = '#ff79c6'
var purple = '#bd93f9'
var red = '#ff5555'
var yellow = '#f1fa8c'

module.exports = {
    name: 'dracula-dark',
    displayName: 'Dracula (Dark)',
    theme: {
        background: {
            default: '#202020',
            success: green,
            notice: yellow,
            warning: orange,
            danger: red,
            surprise: purple,
            info: cyan
        },
        foreground: {
            default: foreground
        },
        highlight: {
            default: comment
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(32, 32, 32, 0.8)'
                }
            }
        }
    }
}