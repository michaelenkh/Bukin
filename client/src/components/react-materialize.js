import React, {Component} from 'react';
import { Button, Icon, Modal } from 'react-materialize';



class ModalWindow extends Component {
    render() {
        return (
            <div>
                <Modal
                    header=''
                    trigger={<Button id="demo" className="bookNow btn-flat">BOOK NOW<Icon right></Icon></Button>}>
                        <div></div>
                </Modal>
            </div>
        )
    }
}

export default ModalWindow;