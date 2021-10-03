import React from 'react';
import { screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from '../services/RenderWithRouter';

describe('Testa página de Login', () => {

    beforeEach(() => {
        RenderWithRouter(<LoginPage />);
    });

    const srcTitle = 'https://media.discordapp.net/attachments/872170473901920328/875141650429644880/Untitled_Artwork.png?width=1440&height=534';
    const srcTriviaImage = 'http://localhost/trivia.png';

    const testEmail = 'teste@email.com';
    const testName = 'Testezinho da Silva';

    it('1 - Testa se o título do jogo está presente na tela de login', () => {
        const title = screen.getByAltText(/pikahoot/i);
        expect(title.src).toBe(srcTitle);
    });

    it('2 - Testa se a imagem do trivia está presente na tela de login', () => {
        const triviaImage = screen.getByAltText(/trivia/i);
        expect(triviaImage.src).toBe(srcTriviaImage)
    });

    it('3 - Testa se há um campo de preencher o e-mail na tela de login', () => {
        const emailInput = screen.getByPlaceholderText(/email/i);
        userEvent.type(emailInput, testEmail)

        expect(emailInput.value).toBe(testEmail);
    });

    it('4 - Testa se há um campo de preencher o nome na tela de login', () => {
        const nameInput = screen.getByPlaceholderText(/name/i);
        userEvent.type(nameInput, testName);

        expect(nameInput.value).toBe(testName);
    });

    it('5 - Testa se há um botão de Play e se ele está desabilitado', () => {
        const playButton = screen.getByRole('button', { name: /play/i });
        expect(playButton).toBeInTheDocument();
        expect(playButton).toBeDisabled();
    });

    it('6 - Testa se apenas ao digitar os dados corretamente, o botão Play torna-se clicável', () => {
        const emailInput = screen.getByPlaceholderText(/email/i);
        const nameInput = screen.getByPlaceholderText(/name/i);
        const playButton = screen.getByRole('button', { name: /play/i });

        userEvent.type(emailInput, 'teste');
        expect(playButton).toBeDisabled();

        userEvent.type(emailInput, testEmail);
        userEvent.type(nameInput, testName);
        expect(playButton).not.toBeDisabled();
    });

    it('7 - Testa se há um botão que leva para a página de configurações', () => {
        const settingsButton = screen.getByRole('button', { name: /settings/i });
        expect(settingsButton).toBeInTheDocument();
    });

});