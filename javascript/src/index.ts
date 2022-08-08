// Written by the ThinkingRN team

import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    port: "25",
    host: "localhost"
});

export default class MicroSMS {
    provider: string
    providerDomain: string
    sender: string

    constructor(provider: string, sender: string) {
        this.provider = provider;
        this.sender = sender;
    }

    sendMessage(phoneNumber: number, message: string): object {
        var options = {
            from: this.sender,
            to: phoneNumber + this.provider,

        }

        return {

        };
    }
}