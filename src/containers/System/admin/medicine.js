import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  hendlegetThuoc,
  createNewMedicine,
  DeleteThuoc,
  editThuocsv,
  getDetailMec,
} from "../../../services/userService";
import ModalEditMedicini from "../ModalEditMedicini";
import { emitter } from "../../../utils/emitter";
import "../admin/medicine.scss";
import ModaMedicine from "../ModaMedicine";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mdParser = new MarkdownIt(/* Markdown-it options */);
class Medicine extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isOpenmodaMedicine: false,
      isOpenModalEditMedicini: false,
      selectedOption: "",
      contentMar: "",
      contentHtml: "",
      listThuoc: [],
      ThuocEdit: [],
    };
  }
  //gán giá trị
  async componentDidMount() {
    await this.getAllFormThuoc();
    this.props.GETMEDICIN();
  }

  buidDataInput = (data) => {
    let result = [];
    if (data && data.length > 0) {
      data.map((item, index) => {
        let object = {};
        let thuoc = `${item.TenThuoc}`;
        object.label = thuoc;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.allThuoc.data);

    if (prevProps.allThuoc !== this.props.allThuoc) {
      let dataSelect = this.buidDataInput(this.props.allThuoc.data);
      this.setState({
        listThuoc: dataSelect,
      });
    }
  }

  getAllFormThuoc = async () => {
    let response = await hendlegetThuoc("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        products: response.data,
      });
    }
  };

  hendleEditThuoc = (thuoc) => {
    this.setState({
      isOpenModalEditMedicini: true,
      ThuocEdit: thuoc,
    });
  };

  //hendle

  hendleAddUser = () => {
    this.setState({
      isOpenmodaMedicine: true,
    });
  };

  //togede
  toggleThuocModal = () => {
    this.setState({
      isOpenmodaMedicine: !this.state.isOpenmodaMedicine,
    });
  };

  toggleEditUserModal = () => {
    this.setState({
      isOpenModalEditMedicini: !this.state.isOpenModalEditMedicini,
    });
  };

  createThuoc = async (data) => {
    try {
      let response = await createNewMedicine(data);
      if (response && response.message.errCode !== 0) {
        alert(response.message.errMessage);
      } else {
        await this.getAllFormThuoc();
        this.setState({
          isOpenmodaMedicine: false,
        });
        toast.success("Xóa Thành Công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      emitter.emit("EVEN_CLEAR_MODAL_DATA");
    } catch (e) {
      console.log(e);
    }
  };

  editThuoc = async (data) => {
    try {
      let response = await editThuocsv(data);
      if (response && response.message.errCode !== 0) {
        alert(response.message.errMessage);
      } else {
        await this.getAllFormThuoc();
        this.setState({
          isOpenModalEditMedicini: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMar: text,
      contentHtml: html,
    });
  };

  heandleSave() {
    this.props.SAVEMEDICIN({
      ContentsHTML: this.state.contentHtml,
      MAK: this.state.contentMar,
      thuocId: this.state.selectedOption.value,
    });
  }

  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    let res = await getDetailMec(selectedOption.value);
    if (res && res.errCode === 0 && res.data && res.data.Contents) {
      let content = res.data.Contents;
      this.setState({
        contentHtml: content.ContentsHTML,
        contentMar: content.MAK,
      });
    } else {
      this.setState({
        contentMar: "",
        contentHtml: "",
      });
    }
  };

  hendleDeleteThuoc = async (thuoc) => {
    try {
      let res = await DeleteThuoc(thuoc.id);
      if (res && res.message.errCode === 0) {
        await this.getAllFormThuoc();
        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        alert(res.message.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let products = this.state.products;
    const { selectedOption } = this.state;
    return (
      <React.Fragment>
        <div className="Manageusers">
          <ModaMedicine
            isOpen={this.state.isOpenmodaMedicine}
            toggleThuocModal={this.toggleThuocModal}
            createThuoc={this.createThuoc}
          />
          {this.state.isOpenModalEditMedicini && (
            <ModalEditMedicini
              isOpen={this.state.isOpenModalEditMedicini}
              toggleThuocModal={this.toggleEditUserModal}
              curentUser={this.state.ThuocEdit}
              editThuoc={this.editThuoc}
            />
          )}

          <div className="Manageusers-content">
            <h1 className="Manageusers-title">MANAGE USERS</h1>
          </div>
          <div className="create">
            <button
              className="btn btn-primary px-3"
              onClick={() => this.hendleAddUser()}
            >
              <i className="fas fa-plus icon"></i>
              Thêm Thuốc
            </button>
          </div>
          <table>
            <tbody>
              <tr className="taitle">
                <th>Tên Thuốc</th>
                <th>Dạng Bào Chế</th>
                <th>Tác dụng</th>
                <th>Thành Phần Chính</th>
                <th>Độ Tuổi</th>
                <th>Đơn giá</th>
                <th>DVT</th>
                <th>Số Lượng</th>
                <th>Quy Cách</th>
                <th>Chỉ Dịnh</th>
                <th>Thuốc Cần Kê Toa</th>
                <th>Chống Chỉ Định</th>
                <th>Số Đăng Ký</th>
                <th>action</th>
              </tr>
              {products &&
                products.map((item, index) => {
                  return (
                    <>
                      <tr className="item">
                        <td>{item.TenThuoc}</td>
                        <td>{item.DangBaoChe}</td>
                        <td>{item.TacDung}</td>
                        <td>{item.ThanhPhanChinh}</td>
                        <td>{item.DoTuoi}</td>
                        <td>{item.DonGia}</td>
                        <td>{item.DVT}</td>
                        <td>{item.SoLuong}</td>
                        <td>{item.QuyCach}</td>
                        <td>{item.ChiDinh}</td>
                        <td>{item.ThuocCanKeToa}</td>
                        <td>{item.ChongChiDinh}</td>
                        <td>{item.SoDangKy}</td>
                        <td>
                          <button
                            className="btn-edit"
                            onClick={() => this.hendleEditThuoc(item)}
                          >
                            <i className="fas fa-user-edit edit-item"></i>
                          </button>

                          <button
                            className="btn-delete"
                            onClick={() => this.hendleDeleteThuoc(item)}
                          >
                            <i className="far fa-trash-alt delete-item"></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div id="CtThuoc" className="thuoc">
          <div className="ctThuoc-title">
            <span>Tạo Thông Tin Thuốc</span>
            <button onClick={() => this.heandleSave()} className="btn-save">
              Lưu
            </button>
          </div>
          <div className="select">
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.listThuoc}
            />
          </div>
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMar}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allThuoc: state.admin.allThuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GETMEDICIN: () => dispatch(actions.GETMEDICIN()),
    SAVEMEDICIN: (data) => dispatch(actions.SAVEMEDICIN(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Medicine);

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
