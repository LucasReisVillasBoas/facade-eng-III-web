import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #191e36;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const PostSection = styled.div`
    height: 700px;
    width: 700px;
    background-color: #CCCCCC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding: 130px 0;
    gap: 30px;
`

export const Post = styled.div`
    height: 200px;
    width: 600px;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
