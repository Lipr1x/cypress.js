describe('Тестирование 12.2', function () {

	// it('позитивный кейс авторизации', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#mail').type('german@dolnikov.ru');
	// 	cy.get('#pass').type('iLoveqastudio1');
	// 	cy.get('#loginButton').click();
	// 	cy.get('#messageHeader').contains('Авторизация прошла успешно');
	// });

	// it('востановление пароля', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#forgotEmailButton').click();
	// 	cy.get('#mailForgot').type('mail@mail.iran');
	// 	cy.get('#restoreEmailButton').click();
	// 	cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
	// 	cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	// });

	// it('негативный кейс авторизации', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#mail').type('german@dolnikov.ru');
	// 	cy.get('#pass').type('iLoveqastudio2');
	// 	cy.get('#loginButton').click();
	// 	cy.get('#messageHeader').contains('Такого логина или пароля нет');
	// 	cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	// });

	// it('негативный кейс авторизации 2', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#mail').type('kirill@ovsyannikov.ru');
	// 	cy.get('#pass').type('iLoveqastudio1');
	// 	cy.get('#loginButton').click();
	// 	cy.get('#messageHeader').contains('Такого логина или пароля нет');
	// 	cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	// });

	// it('негативный кейс валидации мэйла', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#mail').type('germandolnikov.ru');
	// 	cy.get('#pass').type('iLoveqastudio1');
	// 	cy.get('#loginButton').click();
	// 	cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
	// });

	// it('приведение к строчным буквам в логине', function () {
	// 	cy.visit('https://login.qa.studio/');
	// 	cy.get('#mail').type('GerMan@Dolnikov.ru');
	// 	cy.get('#pass').type('iLoveqastudio1');
	// 	cy.get('#loginButton').click();
	// 	cy.get('#messageHeader').contains('Авторизация прошла успешно');
	// 	cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	// });

	it('big deals', function () {
		cy.visit('https://huntingpony.com/');
		cy.get('[href="/collection/sumki-i-avtokresla"] > .banner-list__item-title > .icon').click();
		cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
		cy.wait(1000);
		cy.get('.add-cart-counter__btn').click();
		cy.wait(1000);
		cy.get('[data-add-cart-counter-plus=""]').click();
		cy.wait(1000);
		cy.get('.header__cart > .icon').click();
		cy.wait(1000);
		cy.get('.cart-controls > .button').click();
		cy.get('.decorated-title').contains('Оформление заказа')
	});
})
// .type('{enter}'); приведение к строчным буквам в логине