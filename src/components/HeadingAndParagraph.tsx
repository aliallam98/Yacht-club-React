interface IProps {
heading: string
paragraph :string
className?: string
headingSize?: "text-xl" | "text-2xl" | "text-3xl"
}

const HeadingAndParagraph = ({heading,paragraph,className,headingSize}: IProps) => {
  return (
    <div className={`${className} text-center space-y-4`} >
        <h3 className={`${headingSize} font-normal`}>{heading}</h3>
        <p className="max-w-2xl mx-auto">{paragraph}</p>
    </div>
  )
}

export default HeadingAndParagraph