type Header_property = {
    text?: string;
};

export function Header_block(property: Header_property) {
    return (
        <div>{property.text}</div>
    );
}