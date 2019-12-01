module.exports ={
    presets: [
        //responsavel por alterar as funções que o navegador não intende (ex: import, export, arrow functions ...)
        "@babel/preset-env",
        //responsevel por alterar coisas que o navegador não entende do react (ex jsx, funcionalidades especificas) 
        "@babel/preset-react"
    ],
    plugins: [
        //plugin que permite adicionar state sem declarar um constructor, sem que o corretor de código acuse
        '@babel/plugin-proposal-class-properties'
    ]
};