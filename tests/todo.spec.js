
import { test , expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('go for walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('sleep');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('study');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('buy grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('go for walk').click();
  await page.getByText('go for walk').click();
  await page.getByRole('listitem').filter({ hasText: 'go for walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'play' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'buy grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
});