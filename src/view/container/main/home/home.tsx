import React, {Component} from 'react';
// import ReactJson from "react-json-view";
import girl from "../../../template/photo/icon/png/girl.png"
import axios from 'axios'
import Header from "src/view/container/header/header";
import Footer from "src/view/container/footer/footer";
import "./home.scss";
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


import Tifanibar from "src/view/container/header/tifanibar";


class Home extends Component<Props,State>{
    constructor(parameters: { Props: Props, State: State }) {
        let {Props, State} = parameters;
        super(Props, State);
        this.state= {
            data:[]
        };
        // this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(): void
     {
        axios.get('http://localhost:8080/projects')
            .then(response =>{

                // transformResponse: (r: ServerResponse) => r.data
                // console.log(response.data.Projects)
                this.setState({
                data:response.data.Projects
                }
            )
            },error=>{
                console.log('server errorrrr')
            });
    }
    onewayshowing(){
        return(
            this.state.data.map( (  Projects: Projects) =>(

                <div className={"card-body card-body-cascade text-right wow fadeIn"}>
                    <Row key={Projects.id}>
                    <Col sm={9}>
                        <Row>
                            <div className={"firstline"}>
                                <Col >
                                    <div className={"title_home"}>
                                        {Projects.title }
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className={"time_remain"}>
                                        {" زمان باقی مانده: "}  {Projects.deadline%10000}
                                    </div>
                                </Col>
                            </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className={"discription"}>
                                {Projects.description}
                            </div>
                            <div className={"budget"}>
                                بوجه: {Projects.budget} تومان
                            </div>
                            <div className={"skills"}>
                                <div className={"skill_title"}>
                                    مهارت ها:
                                </div>

                                {Projects.needskil.map((skill:skil)=>(

                                    "\n"+skill.name+"\n"
                                ))}
                            </div>
                            <br/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img src={girl} alt="Girl" />
                </Col>
            </Row>
                </div>

        ))

        )
    }

    render() {
        // console.log("responseeeee");
        console.log(this.state.data);
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return (

            <div>
                {Header.call(this)}
                {Tifanibar.call(this)}
                <main>
                    <Row>
                    <Col sm={1}/>
                    <Col>
                    {this.onewayshowing()}
                    </Col>
                    <Col sm={3}/>
                    </Row>


                </main>

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

    export default Home;