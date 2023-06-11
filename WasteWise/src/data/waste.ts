interface WasteType {
    type: string;
    color: string;
}

const Waste: WasteType[] = [
    {
        type: "None",
        color: "white",
    },
    {
        type: "Plastic",
        color: "#de8526",
    },
    {
        type: "Paper",
        color: "#5a6bb9",
    },
    {
        type: "Metal",
        color: "#eaca33",
    },
    {
        type: "Glass",
        color: "#53862c",
    },
    {
        type: "Cardboard",
        color: "#5a6bb9",
    },
    {
        type: "Organic",
        color: "#cb3b22",
    },
];

export default Waste;
