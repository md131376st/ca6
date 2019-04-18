import React, {Component} from 'react';
// import ReactJson from "react-json-view";
import girl from "../../../template/photo/icon/png/girl.png"
import mona from "../../../template/photo/slideShow/1.jpg"
import axios from 'axios'
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import Tifanibar from "src/view/container/header/tifanibar";
import "./projectPage.scss";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup, ListGroup,
    Row,
    ToggleButton
} from "react-bootstrap";






class ProjectPage extends Component<Props,State>{

    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props, State);
        this.state= {
            data:[]
        };
        // this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(): void
    // {
    //     axios.get('http://localhost:8080/projects')
    //         .then(response =>{
    //
    //             // transformResponse: (r: ServerResponse) => r.data
    //             // console.log(response.data.Projects)
    //             this.setState({
    //                     data:response.data.Projects
    //                 }
    //             )
    //         },error=>{
    //             console.log('server errorrrr')
    //         });
    // }

    render() {
        return (
         <div>
        {Header.call(this)}
        {Tifanibar.call(this)}

            <div className="card-body card-body-cascade text-right wow fadeIn" data-wow-delay="0.2s">
                <div className="row">
                    <div className="col-sm-9">
                    <h2 className="card-title"><strong>پروژه طراحی سایت جاب اونجا</strong></h2>
                    <h4 className="red-text"><strong>مهلت تمام شده </strong>
                        <img alt="deadline" src="../../../template/photo/icon/png/003-deadline.png"></img>
                    </h4>
                    <h4 className="buget"><strong>بودجه : ۲۵۰۰ تومان</strong>
                        <img alt="money bag" src="../../../template/photo/icon/png/004-money-bag.png"></img>
                    </h4>
                    <h4 className="winer"><strong>
                        وحید محمدی
                    </strong>
                        <img alt="cheak mark" src="../../../template/photo/icon/png/001-check-mark.png"></img>
                    </h4>
                    <h3><strong> توضیحات</strong></h3>
                    <h4 className="ditail">
                        &nbsp; &nbsp; لورم الپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                        گرافیک است. چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است . لورم ایپسوم
                        متن ساختگی با تولید سادگی نا مفهوم از صنعت جاپ و با استقاده از طراحان گرافیک است . چاپگرها و
                        متون بلکه روزنامه و محله در ستون و سطر آنچنان که لازم است.
                    </h4>
                </div>
                <div className="col-sm-3">
                    <img alt="project img" src="../../../template/photo/icon/png/girl.png"></img>
                </div>
            </div>

                <div className="row roww">
                    <div className="col">
                        <h3 className="skills"><strong> مهارت های لازم: </strong></h3>
                        <div className="col-sm-2">
                            <div className="skills_">
                                <p> HTML</p>
                                <div className="points"> 5</div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="skills_">
                                <p> CSS</p>
                                <div className="points"> 3</div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="skills_">
                                <p> JavaScript</p>
                                <div className="points"> 16</div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="skills_">
                                <p> TypeScript</p>
                                <div className="points"> 2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row_">
                    <div className="col">
                        <h4 className="warning">
                            <img alt="danger" src="../../../template/photo/icon/png/002-danger.png"></img>
                                <strong>
                                    مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است !
                                </strong>

                        </h4>

                    </div>
                </div>
        </div>

        {Footer.call(this)}

        </div>
    );
    }
}

interface Props {
    // yourname : string;

}
interface State {
    data: []

}
interface ServerResponse {
    // data: Projects
}

interface Projects {
    needskil:[]
    userREQ:[]
    description:string
    id:string
    title:string
    deadline:number
    budget:number


}
interface skil {
    name:string
    point:number
}

interface users {
    name:string
    jobtitle:string
    img:string

}

export default ProjectPage;