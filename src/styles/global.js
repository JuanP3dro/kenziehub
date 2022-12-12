import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
button, input {
  border: none;
  cursor: pointer;
}
.App {
  background-color: #121214;
}

:root {
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;
  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;
  --sucess: #3FE864;
  --negative: #E83F5B;
}
.title1 {
  font-weight: 700;
  font-size: 18px;
}
.title2 {
  font-weight: 400;
  font-size: 12px;
}
.title3 {
  font-weight: 500;
  font-size: 16px;
}
.title4 {
  font-weight: 600;
  font-size: 12px;
}
.title5{
  font-weight: 600;
  font-size: 16px;
}
.title6 {
  font-weight: 700;
  font-size: 14px;
}
`