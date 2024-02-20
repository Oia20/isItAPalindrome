const input = document.getElementById('text-input')
const submit = document.getElementById("check-btn")
const result = document.getElementById("result")
function checkTextEntry () {
  if (input.value === '') {
    alert("Please input a value")
  } else {
    checkIfPalindrome()
  }
}

const checkIfPalindrome = () => {
  let dealWithThisInput = input.value
  dealWithThisInput = dealWithThisInput.replace(/\s/g, '');
  let inputWithoutSpecialCharacters = dealWithThisInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  let listToBeReversed = inputWithoutSpecialCharacters.split("")
  let listReversed = listToBeReversed.reverse()
  let inputWithoutSpecialCharactersReversed = listReversed.join("")
  console.log("Regular: ", inputWithoutSpecialCharacters, " Reversed: ", inputWithoutSpecialCharactersReversed)
  if (inputWithoutSpecialCharacters.toLowerCase() === inputWithoutSpecialCharactersReversed.toLowerCase()) {
    result.innerHTML = `${input.value} is a palindrome &#128513;`
  } else {
    result.innerHTML = `${input.value} is not a palindrome &#128530;`

  }
}

submit.addEventListener('click', checkTextEntry)

