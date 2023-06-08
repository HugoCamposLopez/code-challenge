import axios from "axios"
import { getTotalPoints } from "../../src/utils/app.helper";

describe("getTotalPoints", () => {
  it("Should work with negative numbers", () => {
    const data1 = [
      {
        createdAt: '2022-12-09T06:34:25.607Z',
        product: 'Handmade Metal Shoes',
        points: 16434,
        image: 'https://loremflickr.com/640/480/transport',
        is_redemption: false,
        id: '1',
      },
      {
        createdAt: '2022-12-09T17:02:51.904Z',
        product: 'Recycled Plastic Tuna',
        points: 92984,
        image: 'https://loremflickr.com/640/480/technics',
        is_redemption: true,
        id: '2',
      },
    ];
    expect(getTotalPoints(data1)).toBe("-76,550.00")
  })

  it("Should work with positive numbers",() => {
    const data1 = [
      {
        createdAt: '2022-12-09T06:34:25.607Z',
        product: 'Handmade Metal Shoes',
        points: 16434,
        image: 'https://loremflickr.com/640/480/transport',
        is_redemption: false,
        id: '1',
      },
      {
        createdAt: '2022-12-09T17:02:51.904Z',
        product: 'Recycled Plastic Tuna',
        points: 92984,
        image: 'https://loremflickr.com/640/480/technics',
        is_redemption: true,
        id: '2',
      },
      {
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 158630,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '2',
    }];
    expect(getTotalPoints(data1)).toBe("82,080.00")
  })


})