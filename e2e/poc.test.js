import { test, expect } from '@playwright/test';

test('pocのシナリオをテストする', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // 会員登録
    //await entry(page)

    // ログイン
    await login(page)

    // 購入フロー
    await purchase(page)

    // ログアウト
    // await logout(page)
});

// todo
async function entry(page) {
    await page.locator('text=登録').click()
    await expect(page.url()).toBe('http://localhost:3000/entry');

    await page.getByLabel('名前「姓」 *').fill('足立');
    await page.getByLabel('名前「名」 *').fill('智広');
    await page.getByLabel('フリガナ「セイ」 *').fill('ちひろ');
    await page.getByLabel('フリガナ「メイ」 *').fill('ちひろ');
    await page.getByLabel('都道府県 *').fill('1');
    await page.getByLabel('郵便番号 *').fill('0001111');
    await page.getByLabel('住所「都道府県」 *').fill('住所1');
    await page.getByLabel('住所「市区町村」 *').fill('住所2');
    await page.getByLabel('電話番号 *').fill('00011112222');
    await page.getByLabel('メールアドレス *').fill('ec-cube@example.com');
    await page.getByLabel('パスワード *').fill('password');
    await page.getByRole('button', { name: '送信' }).click();
}

async function login(page) {
    await page.getByRole('link', {name: 'ログイン'}).getByRole('button').click();
    await expect(page.url()).toBe('http://localhost:3000/mypage/login');

    let token = await page.locator('text=現在のセッショントークン');
    await expect(token).toContainText('未ログイン');

    await page.getByLabel('ユーザー名 *').fill('ec-cube@example.com');
    await page.getByLabel('パスワード *').fill('password');
    await page.getByRole('button', {name: '送信'}).click();

    token = await page.locator('text=現在のセッショントークン');
    await expect(token).not.toContainText('未ログイン');
}

// todo
async function logout(page) {

}

async function purchase(page) {
    // 商品詳細を表示
    await page.getByRole('button', { name: '購入' }).click();
    await expect(page.url()).toBe('http://localhost:3000/product/detail/2');
    await page.getByText("チェリーアイスサンド");
    // カートに入れる
    await page.getByRole('button', { name: 'カートに追加' }).click();
    // カートアイコンをクリック
    await page.getByLabel('account of current user').click();
    // カート表示
    await page.getByRole('button', { name: 'カートを見る' }).click();
    await expect(page.url()).toBe('http://localhost:3000/cart');
    await page.getByTestId('CloseIcon').locator('path').click(); // サイドバーをクローズ
    // 注文画面へ
    await page.getByRole('button', { name: 'レジへ進む' }).click();
    await expect(page.url()).toBe('http://localhost:3000/shopping');
    // 支払い方法を変更
    await page.getByText('お支払い情報').waitFor({state: "visible"});
    await page.getByText('代金引換').click(); // todo 支払方法変更のクリックが効いていない
    await page.getByText('代金引換').waitFor({state: "visible"});
    // 確認画面へ
    await page.getByRole('button', { name: '確認する' }).click();
    await expect(page.url()).toBe('http://localhost:3000/shopping/confirm');
    const payment = await page.getByText('郵便振替'); // todo 支払方法変更のクリックが効いていない
    await expect(payment).toBeVisible();
    // 注文完了
    await page.getByRole('button', { name: '注文する' }).click();
    const thanks = await page.getByText('注文ありがとうございます。');
    await expect(thanks).toBeVisible();
    await expect(page.url()).toBe('http://localhost:3000/shopping/complete');
}
