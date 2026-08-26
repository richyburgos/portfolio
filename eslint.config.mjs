import withNuxt from './.nuxt/eslint.config.mjs'
import unusedImports from 'eslint-plugin-unused-imports'

export default withNuxt(
    {
        ignores: [
            // 'assets/fontawesome/**',
            'assets/**',
        ]
    },
    {
        files: ['**/*.{js,ts,vue}'],

        plugins: {
            'unused-imports': unusedImports
        },

        rules: {
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'all',
                    argsIgnorePattern: '^_'
                }
            ],
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    'newlines-between': 'never',
                    alphabetize: { order: 'asc', caseInsensitive: true }
                }
            ],
            'import/no-duplicates': 'warn',
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'never'],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: { max: 2 },
                    multiline: { max: 1 }
                }
            ],
            'vue/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'ignore',
                    multiline: 'beside'
                }
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always'
                }
            ],
            'vue/html-closing-bracket-spacing': 'error',
            'vue/html-self-closing': [
                'error',
                {
                    html: { void: 'always', normal: 'always', component: 'always' },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'function-paren-newline': ['error', 'consistent'],
            'max-params': ['warn', 3],
            curly: ['error', 'all'],
            'keyword-spacing': ['error', { before: true, after: true }],
            'space-before-blocks': 'error',
            'brace-style': ['error', '1tbs', { allowSingleLine: false }],
            'vue/require-v-for-key': 'error',
            'vue/no-use-v-if-with-v-for': 'error',
            'vue/multi-word-component-names': 'off',
            eqeqeq: ['error', 'always'],
            'no-var': 'error',
            'prefer-const': 'warn'
        }
    }
)
