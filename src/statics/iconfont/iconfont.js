import { createGlobalStyle } from "styled-components";

export const IconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1588594215428'); /* IE9 */
    src: url('./iconfont.eot?t=1588594215428#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVQAAsAAAAACjQAAAUBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqGfIV2ATYCJAMcCxAABCAFhG0HZhvUCBFVpNWQ/UiwbS+krIM9Saqok3QmH2JT/51ArpDWydQMmVm67bvCXBWZKV9EaIAAgrmb0/z/bl9ZARFAWfBZN59ccWTvOKcov3gZLkIFsAD26tA0pWECVtfO4lJLodIooWAmHKAA9foFG8jrYxF71yf5YeziMu4DAaCgMCqCtGzdUYcAh7aMACCvjBg2CCJmAC+hEQi1nLOXg0yHBEEn0MsAprk/T75BdSIAColBe1DX3FZD0TQUX05mdmSjL3Ng92cDwBwCGICKADhAxuY6bDA/UREMivQ7OXQAaRCgkEMRxsPa4Ysvu305OYog3qj1E6TpOYAEhtaCNf7xQGRgRRwSeyZlIBQmAgkI4wgYENZGQIHwBQIZ+LIbAgJ8OVl0uxQxVJEGIAGQ0xVCYkkHBTfXCNDMTCE0NRGPc2IItGtTSKWS7+tHPLiuTnSDBIHl+KYZzbO9btZRn38JpCtmXFdeVnv1nltYWZy356BD6iRAIcpxZeJV4liW417W0Ni9HvYGddIpQj7OMY8FxPfNLiZ5njEpaGLkGD0+6oYX46U/pe9/7D7XvRdG8IXlh30H9hkyVLG3HJh0aBtZenTi4Q8zUjI/SI+lDVKpYjYxGja2OukD05E2aO1R59ikI/Zh82Nlrauv3l5w7kFlYtn9ru66mna4bMXZC7Q56qQ88041UdeU8Z5Zwb3CeZyNw93H5uzEwLF5i+auzWFfI7CCoMG8PHs8TZ0XVAgCbc7tfw736vWgytvN6Ljdu8fRpp9rX2p6hP/7Lz/Sp8WKf0bGOqNaHwrHc9vcKNvyRjIt6lv4LzXuYtDmg0c0Dvg/jd9+50zdKkRqVvn1cuaI1H5qh6b1n/e33rmUT/snf6mfShVG1cfrHySTSyu904LOOHlyJtO5tpbNoPzwnBbvVL6dTN7fsd2oNeNH6mzZ7DDMxT7q0JGI53DhGBRl9h1etCi/o3NtniXBWa8Mm7p791TzpYoV66Q1r1m2ZnMNG5tvRN3jdiYyK946POGDCeUPtSzecpoTbdgQFQbSdOM/6uFMaDmhxYLtufWT9ZL1cwu2QMNTNuv6e6kRdRtk1b1SNKfQ4CXbd9b7qOG8tGN1sjs3fLNtjXeHitSPiF6Anr3eUSr11rlDG/fkGmXkxAOt3bE9OSOaSY9nNOt+5MjrHZNZ23JGvdJ+/+7m3cTUeiNrv7VhY/ux2xM1+vt0qzyfD635ffEVfXp1RW0AQBSx4wxAZNuOsaau3mb/mvR/qONMJpA5BZ51+HlAesPfhPoIwnf9MmWQpJ4CP5kStYV/o46jBPOfRBZrxhgX25mG6P+arBi6QcQoAEXvAf5BTxYe9qfURhPYLgEtBIoYCgGDQEksJ1YECSpqggyh0gQUFbweVmVjZ8hSAJT3DYDI8ANUmmPAZPjFcuIfSBL+QZbRGSjM7s5Ulc6rRyYUGqA/gtdlNIZZlFf+RnZJyFGxS/8inn0Y2qpJpl9pJO5jw7yznYgBwyXDC3gYpVRg4hJIS+VEpm1dm7x3qnTJK6UFRpAgA9A7Ap5WjIw9WKjU978h1iJBXNJS4vxC2MyPDlqVpgb2VTHWajmXybMdqyOEwYsMVmTgBdpI0hMFmPJnBUQTFdciNtmqUTdTV1GNr8rXeQhAoT0/FiWMcCIRmcSIAP/kx809KoOjHTB4m6pOjoLj9TTezq4swR88ntBfHZeMpferFQAAAA==') format('woff2'),
    url('./iconfont.woff?t=1588594215428') format('woff'),
    url('./iconfont.ttf?t=1588594215428') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1588594215428#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`