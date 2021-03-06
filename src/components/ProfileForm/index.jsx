import React, { Component } from 'react';
import Contact from './Contact';
import Work from './Work';
import Education from './Education';
import profileFields from './../../db/ProfileField';
import DashboardMenu from '../Dashboard/DashboardMenu';
import { Link } from "react-router-dom";
import { Beforeunload } from 'react-beforeunload';
import './../../css/ProfileForm.css';
import Volunteer from './Volunteer';
import Skills from './Skills';
import Summary from './Summary';
import Projects from './Projects';
import References from './References';
import Finalize from './Extra';


export default class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: parseInt(this.props.match.params.page),
            parsedData: {}
        }
    }

    pathWithoutPage = this.props.history.location.pathname.slice(0,-1);
    pages = [Contact, Work, Education, Volunteer, Skills, Summary, Projects, References, Finalize]
    pagesStr = ["Contact", "Work", "Education", "Volunteer", "Skills", "Summary", "Projects", "References", "Finalize"]
    id = this.props.match.params.id;

    render() {
        let resumeData = window.localStorage.getItem('resumeData'), stringData, initialData;
        if (resumeData !== null) {
            let parsedData = JSON.parse(resumeData);
            if (parsedData.id === this.id) {
                initialData = parsedData;
            } else {
                console.log('I am hereeee');
                let profileFieldsId = {
                    ...profileFields,
                    id: this.id
                }
                stringData = JSON.stringify(profileFieldsId);
                window.localStorage.setItem('resumeData', stringData);
                initialData = profileFieldsId;
                if (this.props.match.params.page > 0) {
                    this.props.history.push(this.pathWithoutPage + '0')
                }
            }
        } else {
            // Gets profile data from backend
            let profileFieldsId = {
                ...profileFields,
                id: this.id
            }
            stringData = JSON.stringify(profileFieldsId);
            window.localStorage.setItem('resumeData', stringData);
            initialData = profileFieldsId;
            if (this.props.match.params.page > 0) {
                this.props.history.push(this.pathWithoutPage + '0')
            }
        }



        let pageNo = parseInt(this.props.match.params.page)
        if (pageNo > this.pagesStr.length - 1  ||  pageNo < 0) {
            return <p>Page Not Found</p>
        }

        const CurrComp = this.pages[pageNo]
        const pagesJSX = this.pagesStr.map((x, index) => 
            <div className={"page " + (pageNo >= index ? "current-page" : "")} >
                {
                    pageNo >= index ?
                        <Link to={this.pathWithoutPage + index}>
                    {x}
                        </Link>
                    :
                        <Link to={this.props.history.location.pathname}>{x}</Link>   
                }
                                
                <div className={index !== this.pagesStr.length - 1 ? "short-line" : ""}>
                </div>
            </div>
        )

        const pagesDotsJSX = this.pagesStr.map((x, index) => 
        {
            return pageNo >= index ?
            <Link to={this.pathWithoutPage + index}>
                <div className={"pages-dot " + (pageNo >= index ? "current-page-sm" : "")}>
                </div>
            </Link> : 
            <Link to={this.props.history.location.pathname}>
                <div className={"pages-dot " + (pageNo >= index ? "current-page-sm" : "")}>
                </div>
            </Link>

        })

        const goBack = () => {
            const history = this.props.history
            history.goBack();
        }
        return (
        
        <>
            <Beforeunload onBeforeunload={(event) => event.preventDefault()} />
            <div className="profile-form" >
                <div className="dashboard profiles">
                    <div className="md-flex">
                        <Link className="logo md" to="/">
                            <span className="my">my</span>
                            <span className="Resume">Resume</span>
                        </Link>
                        <Link className="menu-icon" to="/menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </Link>
                    </div>
                    
                    <div className="side-nav">
                        <DashboardMenu active="profiles" />
                    </div>
                    <div className="form-nav-md">
                        <div className="pages-md">
                            {pagesJSX}
                        </div>
                    </div>

                    <svg onClick={goBack} viewBox="0 0 24 24" className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue go-back"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>

                    <div className="form-nav-sm">
                        
                        <div className="pages-sm">
                            <h5>{this.pagesStr[pageNo]}</h5>
                            <div className="pages-dot-container">
                                {pagesDotsJSX}
                            </div>
                        </div>
                    </div>

                    <div className="form-container">
                        <CurrComp initialState={initialData} pagesStr={this.pagesStr} pageNo={pageNo} />
                    </div>
                </div>
            </div>
        </>
        )
    }
}