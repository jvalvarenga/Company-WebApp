import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0 auto;
  line-height: initial;
  background: #f2f2f2;
  color: #425466;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 4em 2em;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  gap: 2em;

  .regular_input,
  textarea {
    border-radius: 0.45rem;
    background-clip: padding-box;
    outline: none;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      box-shadow: 0 0 5px #101010;
      border: 1px solid #425466;
    }
  }

  label {
    font-size: 1.2em;
    font-family: Overpass;
    font-weight: 600;
  }

  .link {
    text-decoration: none;
    color: #880707;
    &:hover {
      text-decoration: underline;
    }
  }

  textarea {
    resize: none;
    padding: 5px;
  }

  .regular_input {
    padding: 4px;
  }

  .wrapper {
    h2 {
      margin-bottom: 1em;
    }
  }

  .button {
    padding: 6px 12px;
    width: 8em;
    font-size: 1.4em;
    border-radius: 6px;
    font-weight: 600;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.black};
    &:hover {
      background: ${({theme}) => theme.colors.primaryTextColor};
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
`

export const Field = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  input {
    width: 100%;
  }
`

export const Checkbox = styled.div`
  display: flex;
  gap: 5px;
  label {
    margin-top: 3px;
  }

  .mail_policy {
    margin-top: 1.4em;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
`

export const CapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em 0;
`
