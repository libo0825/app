module.exports = {
    'parser': 'babel-eslint',
    // 'extends': 'airbnb',
    // 'plugins': [
    //     'react',
    //     'jsx-a11y',
    //     'import'
    // ],
    'rules': {
        'react/prop-types': [0],
        'no-unused-vars': [0],
        'no-undef': [0],
        'no-underscore-dangle': [0],
        'no-script-url': [0],
        'max-len': [2, 150],
        'comma-dangle': [2, {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'ignore',
        }],
        'camelcase': [0],
        'arrow-body-style': [0],
        'indent': [2, 4],
        'quote-props': [2, 'consistent'],
        'global-require': 2,
        // 'no-plusplus': [2, {
        //     'allowForLoopAfterthoughts': true
        // }],
        // 'import/no-extraneous-dependencies': [0],
        // 'import/no-unresolved': [0],
        // 'import/extensions': [0],
        // 'import/prefer-default-export': [0],//默认 export(导出) 优于命名 export(导出)
        // 'react/self-closing-comp': [0], //没有子组件的父组件使用自闭和标签
        // 'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],//这条不允许我们在.js文件中书写JSX语言
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        // 'react/jsx-boolean-value': [2, 'always'],
    },
    'globals': {
        'document': false,
        'window': false,
        'fetch': false,
        /**
         *  jest global variable
         */
        'jest': false,
        'describe': false,
        'it': false,
        'expect': false,
        'beforeEach': false,
        'afterEach': false,
    },
};
