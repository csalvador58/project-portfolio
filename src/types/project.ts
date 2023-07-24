export interface Project {
    id: number;
    title: string;
    name: string;
    image: {
        src: string;
        type: string;
        alt: string;
    };
    about: string;
    url: string;
}