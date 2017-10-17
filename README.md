# Master Password Web Client

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Demo
<a href="https://www.nagekar.com/mpw">https://www.nagekar.com/mpw</a>

### Screenshot
<img src="https://raw.githubusercontent.com/abhn/mpw/master/img/sample.png"/>

### Introduction

Master Password is a password 'generator' that you can think of as a stateless password manager. Just like any other password manager, you have to remember one secret that is used to unlock several of your online passwords (or offline, doesn't really matter). It takes away the burden of having to remember several different passwords by making you remember just one (and takes away the risk that comes with reusing passwords). However, where Master Password differs from traditional disk based or cloud based password managers is that the password is never stored on the disk or transmitted over the network, but generated each time from a combination of the master password, your username and the website's URL (hence 'generator'). Technically, these are three different strings, but you only have to remember one of them (assuming you remember your name and can copy paste the URL from address bar).

### Usage
- Most often you'll need to enter the username, master password and the site's address. 
- In case you need to have multiple accounts on the same website, use the counter option from advanced options drop-down. 
- By default passwords are 20 chars in length (set to maximum), which can be changed from smallest size to a passphrase depending on the needs (this has to be remembered, of course).
- Password can be copied by toggling the show password toggle, and then clicking copy. Due to a restriction in the copying functionality, passwords cannot be directly copied to the clipboard without first toggling them to plaintext.


The algorithm developed by <a href="http://masterpasswordapp.com/algorithm.html">Maarten Billemont</a> is such that you can use the client on a variety of devices and you'll end up with the same password for a given input. Sweet, huh? The javascript implementation called mpw-js is taken from <a href="https://github.com/tmthrgd/mpw-js">https://github.com/tmthrgd/mpw-js</a>.


### About this client
This client is a shameless ripoff of the work done by people mentioned above. My small contribution is the UI bit, as I felt the current <a href="https://js.masterpasswordapp.com/">web client</a> doesn't do justice to the otherwise amazing utility. Just like the official web client, this one doesn't send or receive any data from the client, and no piece of data ever leaves the browser. Everything is client-side.

### Running locally
If for some reason you prefer running this client locally, just clone this repository and open index.html in your web browser.