import { reactive } from 'vue';

export const store = reactive({
    infos: ['info@example.com', '+1(817)901 3377'],
    icons: [
        ['fas', 'envelope'],
        ['fas', 'phone'],
    ],
    socials: [
        {
            class: ['fab', 'square-facebook'],
            color: '#293DB3',
        },
        {
            class: ['fab', 'pinterest-p'],
            color: '#BE284B',
        },
        {
            class: ['fab', 'twitter'],
            color: '#79D1D4',
        },
        {
            class: ['fab', 'linkedin-in'],
            color: '#2862D2',
        },
        {
            class: ['fab', 'instagram'],
            color: 'linear-gradient(149deg, rgba(218,12,213,0.8575805322128851) 0%, rgba(195,12,32,1) 35%, rgba(254,255,64,1) 100%)',
        },
    ],
});
