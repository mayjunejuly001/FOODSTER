import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

it('Should load contact component', () => {
  render(<Contact />)

  const heading = screen.getByRole('heading')

  expect(heading).toBeInTheDocument()
})
it('Should load button inside contact component', () => {
  render(<Contact />)

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})
test('Should load input name inside contact component', () => {
  render(<Contact />)

  const inputName = screen.getByPlaceholderText('Name')
  expect(inputName).toBeInTheDocument()
})
test('Should load 2 input boxes inside contact component', () => {
  render(<Contact />)

  const inputBoxes = screen.getAllByRole('textbox')

  expect(inputBoxes.length).toBe(2)
})
