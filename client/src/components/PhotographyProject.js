import React from 'react'
import { useParams } from 'react-router-dom'
import LayoutOne from './LayoutOne'
import LayoutTwo from './LayoutTwo'
import ContactUs from './ContactUs'
import { useDocumentTitle } from './CustomHooks'
import './styles/ProjectDetails.css'

function PhotographyProject({displayHandler}) {
    const { id } = useParams()
    useDocumentTitle(`Beyond Pixel · ${id}`)
    const details = {
        project1: [
            [
                "#787C7C",
                "Project Name",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
                "/assets/projectDetail1xs@2x.png"
            ],
            [
                "/assets/dc6dcf121401881.60c50bc82079d@2x.png",
                [
                    '/assets/49839c118507173.608a6cd834@2x.png',
                    '/assets/737917118508241.608a71996e@2x.png',
                    '/assets/cd238d118506991.608a6bfbb7@2x.png',
                    '/assets/f9f46f118506991.608a6bfbc4@2x.png'
                ],
                "/assets/32b830121411025.60@2x.png",
                // [
                //     '/assets/49839c118507173.608a6cd834@2x.png',
                //     '/assets/737917118508241.608a71996e@2x.png',
                //     '/assets/cd238d118506991.608a6bfbb7@2x.png',
                // ],
            ]
        ],
    }

    return (
        <div>
            <div className="empty"></div>
            <ContactUs contactClass="pop_up_container" wrapper={true} />
            {
                details[id].map((array, index) => {
                    if (index === 0)
                        return <LayoutOne
                            bgColor={array[0]}
                            projectName={array[1]}
                            content={array[2]}
                            src={array[3]}
                            displayHandler={displayHandler}
                        />
                    else {
                        return array.map((item, index) => {
                            if (index % 2 === 0) {
                                return <img
                                    className="w-100"
                                    src={item}
                                    alt="" 
                                />
                            } else {
                                return <LayoutTwo layoutTwoSrc={item} />
                            }
                        })
                    }
                })
            }
        </div>
    )
}

export default PhotographyProject
