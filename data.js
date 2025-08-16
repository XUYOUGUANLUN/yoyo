// 預設顧客資料
const customerData = [
    {
        id: "C001",
        name: "Passion",
        role: "customer",
        rooms: [
            { day: 1, hotel: "", number: "" },
            { day: 2, hotel: "", number: "" },
            { day: 3, hotel: "", number: "" },
            { day: 4, hotel: "", number: "" },
            { day: 5, hotel: "", number: "" }
        ],
        emergency: {
            name: "XXX",
            phone: "0900000000"
        },
        itinerary: [
            {
                day: 1,
                schedule: [
                    { time: "13:00-13:30", activity: "確認資料、上車" },
                    { time: "", activity: "" },
                    { time: "", activity: "" },
                    { time: "17:30-18:00", activity: "call in" },
                    { time: "18:00-19:00", activity: "晚餐" },
                    { time: "19:00-:20：00", activity: "回飯店休息" }
                ]
            },
            {
                day: 2,
                schedule: [
                    { time: "7:00-9:00", activity: "洗漱時間and早餐時間" },
                    { time: "9:30-12:00", activity: "" },
                    { time: "12:30-13:30", activity: "" },
                    { time: "14:00-17:00", activity: "" },
                    { time: "18:00-19:00", activity: "" }
                ]
            },
            {
                day: 3,
                schedule: [
                    { time: "7:00-9:00", activity: "洗漱時間and早餐時間"  },
                    { time: "9:30-12:00", activity: "文化博物館參觀" },
                    { time: "12:30-13:30", activity: "午餐" },
                    { time: "14:00-16:00", activity: "手作工坊" },
                    { time: "16:30-18:00", activity: "自由活動" },
                    { time: "18:30-19:30", activity: "晚餐" }
                ]
            },
            {
                day: 4,
                schedule: [
                    {  time: "7:00-9:00", activity: "洗漱時間and早餐時間" },
                    { time: "9:30-12:00", activity: "參觀植物園" },
                    { time: "12:30-13:30", activity: "午餐" },
                    { time: "14:00-17:00", activity: "手作體驗" },
                    { time: "18:00-19:00", activity: "晚餐" }
                ]
            },
            {
                day: 5,
                schedule: [
                    {  time: "7:00-9:00", activity: "洗漱時間and早餐時間"  },
                    { time: "9:30-11:30", activity: "紀念品採購" },
                    { time: "12:00-13:00", activity: "午餐" },
                    { time: "13:30-15:30", activity: "返回集合點" }
                ]
            }
        ]
    }
];

// 預設領隊資料
const leaderInfo = {
    name: "冬瓜茶",
    contact: "0900000000",
    intro: "具有多年帶團經驗，熱愛旅遊與分享各地文化。"
};

// 預設登入帳號
const users = [
    { username: "Allan", password: "950520", role: "leader" },     //領隊
    { username: "Passion", password: "00000", role: "customer" },
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
    { username: "", password: "00000", role: "customer" }, 
];
