import type { Goal } from '@/types';

export const goals: Goal[] = [
  {
    title: '.goal',
    img: 'goal-icon.svg',
    description:
      'Koncert? Singiel? A może cała płyta? Przeprowadzimy Cię za rękę od pomysłu aż do realizacji danego celu. Brakuje Ci jakichś kroków? Dodaj swoje własne i realizuj je z nami!',
    styling: 'lg:col-span-2',
    backgroundImage: '/goal-image.svg',
  },
  {
    title: '.contact',
    img: 'contact-icon.svg',
    description:
      'Przejmij kontrolę nad swoją karierą. Zarządzaj kontaktami z wytwórniami, managerami, producentami, dziennikarzami i innymi osobami, które pomogą Ci w realizacji Twoich celów.',
  },
  {
    title: '.storage',
    img: 'storage-icon.svg',
    description:
      'Bałagan w plikach? Nie u nas. Przechowuj swoje utwory, teksty, zdjęcia i inne pliki w jednym miejscu. Dzięki temu zawsze będziesz mieć do nich łatwy dostęp.',
  },
  {
    title: '.artist',
    img: 'artist-icon.svg',
    description:
      'Znowu zapomniałeś o poście na Instagramie? Nie martw się, my Ci przypomnimy. Miej zawsze pod ręką wszystkie materiały dotyczące zbliającej się premiery lub koncertu. Zachowaj konsekwencję w działaniach i zyskaj nowych fanów!',
    styling: 'lg:col-span-2',
    backgroundImage: '/artist-image.svg',
  },
];
