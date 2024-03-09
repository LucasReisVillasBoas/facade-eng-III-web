import React from 'react';
import logo from './logo.svg';
import * as S from './styles';

function App() {

  const dataPost = [
    {
      id: 1,
      title: 'Nest',
      content: 'Nest content here',
      published: true,
      author: { name: 'Lucas' },
      authorId: 1
    },
    {
      id: 2,
      title: 'Ajax',
      content: 'Content ajax here',
      published: true,
      author: { name: 'Andrey' },
      authorId: 2
    },
    {
      id: 3,
      title: 'Prisma',
      content: 'Prisma content here',
      published: true,
      author: { name: 'Andrey' },
      authorId: 2
    },
    {
      id: 4,
      title: 'React',
      content: 'React content here',
      published: true,
      author: { name: 'Andrey' },
      authorId: 2
    }
  ]

  return (
    <S.Container>
      <S.PostSection>
        {
          dataPost.map((ref) =>
          <S.Post>
            <h3>{ref.title}</h3>
            <p>{ref.content}</p>
            <h6>{ref.author.name}</h6>
          </S.Post>)
        }
      </S.PostSection>
    </S.Container>
  );
}

export default App;
