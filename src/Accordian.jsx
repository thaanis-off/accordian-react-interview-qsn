import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./Style.css"

function Accordian({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex == index ? null : index)
  }
  return (
    <div className="accordion-wrapper">
      {!items || items.length === 0 ? (
        "No items available"
      ) : (
        <div className="accordion">
          {items.map((item, index) => {
            return (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-title"
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                  {openIndex === index ? (
                    <FaChevronUp className="right" />
                  ) : (
                    <FaChevronDown className="right" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Accordian
