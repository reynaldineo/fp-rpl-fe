export type CourseVideoCard = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  tags: string;
};

export const courseVideoCard: CourseVideoCard[] = [
  {
    id: '1',
    title: 'React JS',
    description:
      'React JS is a JavaScript library for building user interfaces. Learn what React is all about on this course.',
    videoUrl: 'https://www.youtube.com/embed/cJnO-Y_YnFg?si=zkbIy_0a594GFy_j4',
    imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    tags: 'React, JavaScript',
  },
  {
    id: '2',
    title: 'Vue JS',
    description:
      'Vue JS is a JavaScript framework for building user interfaces. Learn what Vue is all about on this course.',
    videoUrl: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
    imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    tags: 'Vue, JavaScript',
  },
  {
    id: '3',
    title: 'Angular JS',
    description:
      'Angular JS is a JavaScript framework for building user interfaces. Learn what Angular is all about on this course.',
    videoUrl: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
    imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    tags: 'Angular, JavaScript',
  },
  {
    id: '4',
    title: 'Svelte JS',
    description:
      'Svelte JS is a JavaScript framework for building user interfaces. Learn what Svelte is all about on this course.',
    videoUrl: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
    imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    tags: 'Svelte, JavaScript',
  },
  {
    id: '5',
    title: 'Next JS',
    description:
      'Next JS is a JavaScript framework for building user interfaces. Learn what Next is all about on this course.',
    videoUrl: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
    imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    tags: 'Next, JavaScript',
  },
];
