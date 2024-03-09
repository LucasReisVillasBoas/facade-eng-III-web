import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import * as S from './styles';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/feed')
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <S.Container>
      <S.PostSection>
        {
          data && data.map((ref: any) =>
            <S.Post>
              <h3>{ref.title}</h3>
              <p>{ref.content}</p>
            </S.Post>)
        }
      </S.PostSection>
    </S.Container>
  );
}

export default App;
