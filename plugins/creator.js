let handler = function (m) {
  // this.sendContact(m.chat, '082331243615', Nando, m)
  conn.sendContact(m.chat, '6282331243615', Nando, m)
  conn.reply(m.chat, `Tuh Ownerku hehe`, m)
  conn.reply(m.chat, `JANGAN LUPA SUBREK CHANNEL OWNER Https://YouTube.com/c/OMTOSLURR SUBREK BANG`, m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

let owname = global.oname
