export type ButtonType={
    text?: string,
    id?:string,
    name?: string,
    action?: (id:string)=>void ,
    padding?:[number, number?, number?, number?],
    style?: React.CSSProperties,
    children?:React.ReactElement[] | React.ReactElement
}