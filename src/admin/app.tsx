export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    // https://github.com/strapi/strapi/blob/main/packages/core/admin/admin/src/translations/en.json
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Chamorder",
        "app.components.LeftMenu.navbrand.workplace": "Admin",
        "Content Manager": "Quản Lý",
        "content-manager.components.LeftMenu.collection-types": "Quản Lý",
        "content-manager.components.LeftMenu.single-types": "Cài Đặt",
        "Auth.form.welcome.title": "Chamorder Admin",
        "Auth.form.welcome.subtitle": " ",
        "Auth.form.email.placeholder": "e.g. vit@duck.com",
        "global.content-manager": "Quản Lý",
        "content-manager.header.name": " ",
        "Auth.form.register.subtitle": "Đăng ký tài khoản",
        "Auth.form.password.hint": "Phải ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường & 1 số",
        "Auth.form.register.news.label": "Hứa làm tại đây suốt đời",
        "Auth.form.confirmPassword.label": "Nhập lại mật khẩu",
        "Auth.form.firstname.label": "Tên",
        "Auth.form.lastname.label": "Họ",
        "Password": "Mật Khẩu",
        "global.password": "Mật Khẩu",
        "Auth.form.button.register": "Hai Ba Zô!",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {
    // console.log('app.tsx boostrap(app)')
    // console.log(app);
  },
};
