import React, { Component } from 'react';
import { ToastAndroid,Clipboard, Alert,TouchableOpacity,Image,View,Text } from 'react-native';

import refresh from '../Images/refresh.png';

export default class LifeMotto extends Component {

    constructor(props) {
        super(props);
       this.state ={
            danhngon: "",
        }
     
    }
    componentWillMount() {
        this._danhNgon();
    }
    
 _danhNgon(){
       
       //Ngẫu nhiên danh ngôn
       //nguồn sưu tầm: https://vndoc.com/100-cau-danh-ngon-noi-tieng-nhat-the-gioi/download
        var danhNgonArr = [
        " Có hai cách để sống trên đời: một là xem như không có phép lạ nào cả, hai là xem tất cả đều là phép lạ. (Albert Einstein)",
        " Làm đánh đổ một thành kiến khó hơn làm phân hủy một nguyên tử. (Albert Einstein)",
        " Chín phần mười của sự khôn ngoan là khôn ngoan đúng lúc. (Franklin D. Roosevelt)",
        " Có ba trường hợp để tỏ ra mình dốt nát: một là không biết gì hết, hai là biết qua loa không đến nơi đến chốn, ba là biết những điều không nên biết. (Duclos)",
        " Đọc sách không cần nhiều, đọc một chữ đem áp dụng làm việc được một chữ, thế là được. (Lê Quý Đôn)",
        " Giá trị thật sự của con người phải được xác định theo chiều hướng được tự do và không tùy thuộc bất cứ ai. (Albert Einstein).",
        " Đừng nhìn lại quá khứ, đừng mơ tưởng vào tương lai, hãy chú tâm ngay vào phút giây hiện tại. (Đức Phật)",
        " Hãy suy nghĩ tất cả những gì bạn nói. Nhưng đừng nói tất cả những gì bạn suy nghĩ. (Dalarme)",
        " Không có gì giá trị hơn hôm nay. Bạn không thể sống lại ngày hôm qua, và ngày mai thì vẫn còn ngoài tầm với của bạn. (Johann Wolfgang Von Goethe)",
        " Một cái đầu vĩ đại luôn nghĩ về những tư tưởng cao cả. Một cái đầu trung bình thì chỉ nhìn thấy bề ngoài của những sự kiện, còn một cái đầu cạn hẹp thì chỉ nhìn thấy lỗi lầm của người khác. (Khuyết danh)",
        " Nghệ thuật tuyệt đỉnh của giáo dục là khơi dậy niềm hạnh phúc được học tập và sáng tạo. (A. Einstein)",
        " Những điều chúng ta biết chỉ là một giọt nước. Những điều chúng ta không biết là cả một đại dương. (I. Newton)",
        " Những kẻ cứ làm mà không cần học vấn chẳng khác nào người thuỷ thủ đi trên chiếc tàu không bánh lái, không la bàn và cũng chẳng biết rằng họ sẽ đi đâu. (Leonardo De Vinci)",
        " Những kẻ tầm thường thích sưu tầm những câu danh ngôn của bậc vĩ nhân còn những bậc vĩ nhân sống như những câu danh ngôn đó. (Khuyết danh)",
        " Tài năng sẽ bị mai một nếu ta không có những ý tưởng lớn và không tận tâm với những chi tiết dù nhỏ nhất. (E. Dotxoiepxki)",
        " Tài tất phải có học, học tất phải ninh tĩnh. Không học không phát triển được tài, không tĩnh không thành tựu được học. (Gia Cát Lượng)",
        " Tôi biết vì sao người ta thích chặt cây. Ðó là một sinh hoạt mà người ta thấy ngay kết quả. (Albert Einstein)",
        " Tôi không thất bại, tôi đã tìm ra mười ngàn cách nhưng chúng lại không thành. (Albert Einstein)",
        " Suy nghĩ là một việc khó, nên rất ít người chịu khó suy nghĩ. (Albert Einstein)",
        " Đừng mong đợi thấy thế giới sáng sủa, nếu bạn không thay đôi kính đen. (Thomas Stearns Eliot)",
        " Thế giới ngày mai thuộc về những người có tầm nhìn hôm nay. (Robert Schuller)",
        " Người người đều muốn thay đổi thế giới, nhưng ai cũng không muốn thay đổi chính mình. (Lev Tolstoi)",
        " Chúng ta không thể dạy bảo cho ai bất cứ điều gì, chúng ta chỉ có thể giúp họ phát hiện ra những gì còn tiềm ẩn trong họ. (Galileo)",
        " Khi không có mặt trời, chúng ta có thể thấy được các vì sao. (Heraclitus)",
        " Mọi sự vật đều thích giấu bản chất thật sự của mình. (Heraclitus)",
        " Tôi rất ngạc nhiên khi thấy người ta lên kế hoạch cho một chuyến nghỉ phép cẩn thận hơn nhiều so với lên kế hoạch cho cả cuộc đời mình. (Jim Rohn)",
        " Tất cả chúng ta đều có hai phương án: cứ sống một cách bình thường, hoặc là chính ta tạo lập nên cuộc sống riêng và số phận của mình (Jim Rohn)",
        " Cuộc sống có hai quy luật cơ bản: thay đổi là điều không thể tránh được, và, mọi người thường chống lại sự thay đổi (Roger von Oech)",
        " Tư duy sáng tạo không chỉ bao gồm việc tạo ra những ý tưởng mới, mà còn là thoát khỏi những ý tưởng lỗi thời (Roger von Oech)",
        " Thất bại là nền tảng của thành công, và thành công là nơi che giấu thất bại. (Lão Tử)",
        " Người do dự không bao giờ thành công. (Napoleon)",
        " Những người biết thích nghi với thế giới là những người biết đứng dậy tìm kiếm hoàn cảnh mình mong muốn, và nếu không thể tìm thấy, họ sẽ tạo ra nó. (George Bernard Shaw)",
        " Cảnh khổ, sự thất bại là một nấc thang cho bậc anh tài, một kho tàng cho người khôn khéo và là một vực thẳm cho kẻ yếu hèn. (Balzac)",
        " Niềm hoan lạc lớn nhất cuộc đời là làm những gì người ta bảo là bạn không thể làm được. (Walter Gagebot)",
        " Điều tôi muốn biết trước tiên không phải là bạn đã thất bại ra sao mà là bạn đã chấp nhận nó như thế nào. (A. Lincoln)",
        " Thành công chỉ đến khi bạn làm việc tận tâm và luôn nghĩ đến những điều tốt đẹp (A. Schwarzenegger)",
        " Để không bị chỉ trích thì hãy đừng làm gì cả, đừng nói gì cả và cũng sẽ chẳng có gì cả (Elbert Hubbard)",
        " Thất bại chính là một cơ hội để ta bắt đầu làm lại một việc gì đó một cách khôn ngoan hơn (Henry Ford)",
        " Dở nhất trong cái đạo xử thế là không thấy cái lỗi của mình. (Khổng Tử)",
        " Kẻ chế nhạo người khác không bao giờ để ý đến cái xấu của mình. (Tục ngữ Việt Nam)",
        " Một nghề thì sống. Đống nghề thì chết. (Tục ngữ Việt Nam)",
        " Cuộc sống vốn không công bằng - Hãy tập quen dần với điều đó. (Bill Gates)",
        " Hãy hòa nhã với những kẻ dở hơi. Ai biết được ngày sau và khi đó bạn có thể phải làm việc cho một kẻ như vậy. (Bill Gates)",
        " Ðừng nên cố trở thành một người thành công mà hãy gắng trở thành một người có giá trị. (Albert Einstein)",
        " Muốn thực sự đánh giá giá trị của bạn thì hãy xem mọi người được lợi những gì từ những thành công của bạn. (Cullen)",
        " Nếu bạn không thể là mặt trời thì hãy đừng là đám mây. (Hoài Nam Tử)",
        " Bị khiêu khích mà không giận, nếu không phải người đại lượng thì tất là người sâu hiểm. (Lưu Phán)",
        " Nghị lực và bền bỉ có thể chinh phục mọi thứ. (Benjamin Franklin)",
        " Tự tin là điều kiện đầu tiên để làm được những việc lớn lao. (Samuel Johnson)",
        " Sự tinh tuý nhất đó là tâm an lạc. (Đức Phật)",
        " Rất nhiều những điều vĩ đại trên thế giới được xây dựng bởi những con người mệt mỏi và chán nản nhưng vẫn tiếp tục lao động. (Khuyết danh)",
        " Kẻ khốn cùng nhất trên thế giới này không phải là những người không một xu dính túi, mà là kẻ không có nổi một ước mơ. (Khuyết Danh)",
        " Trong một thế giới đang thay đổi rất nhanh chóng, lộ trình duy nhất đưa bạn đến thất bại là không dám mạo hiểm. (Mark Zuckerberg)",
        " Hãy sống theo niềm tin của mình và bạn có thể xoay chuyển cả thế giới. (Henry David Thoreau)",
        " Tôi đã học được nhiều điều từ thất bại của tôi hơn là từ thành công của tôi. (H Davy)",
        " Nhiều người ước mơ được thành công. Thành công chỉ có thể đạt được qua thất bại và sự nội quan liên tục. Thật ra, thành công thể hiện 1% công việc ta làm – kết quả có được từ 99% cái gọi là thất bại. (Soichiro Honda)",
        " Trong sự đương đầu giữa dòng suối và hòn đá, dòng suối luôn luôn thắng, không phải qua sức mạnh mà bằng sự bền bỉ. (H. Jackson Brown)",
        " Nhiều thất bại trong cuộc sống là do lúc bỏ cuộc, người ta không nhận ra họ đã gần thành công đến mức nào rồi. (Khuyết Danh)",
        " Chưa thử sức thì không bao giờ biết hết năng lực của mình. (Goethe)",
        " Hãy học cách sống vượt thành công của người khác. (A.Fuirstenbeg)",
        " Người bị vấp ngã là người dám liều mình. Qua cách họ đối phó với sai lầm, ta có thể đoán dược cách họ giải quyết khó khăn trong tương lai. (Bill Gates)",
        " Biết điều mà ai cũng biết là không biết gì hết. Cái biết chỉ bắt đầu ở chỗ mà mọi người không biết (R. Gourmont)",
        " Con ong được ca tụng vì nó làm việc không phải cho chính mình nhưng cho tất cả. (Saint J.Chrysistome)",
        " Làm việc đừng quá trông đợi vào kết quả, nhưng hãy mong cho mình làm được hết sức mình (Anita Hill)",
        " Chiến thắng bản thân là chiến thắng hiển hách nhất (Platon)",
        " Đi vòng mà đến đích còn hơn đi thẳng mà ngã đau (Tục ngữ Anh)",
        " Đừng giới hạn một đứa trẻ bằng học thức của bạn bởi nó được sinh ra ở một thời đại khác. (Rabindranath Tagore)",
        " Cái rễ của học hành thì đắng cay nhưng quả của nó thì ngọt ngào. (Aristotle)",
        " Dấu hiệu thực sự của sự thông minh không phải là kiến thức mà là trí tưởng tượng. (Albert Einstein)",
        " Khi ngôn từ đúng đắn và rộng lượng, nó có thể thay đổi thế giới (Phật Thích Ca Mâu Ni)",
        " Phải mất 20 năm để xây dựng danh tiếng nhưng chỉ cần năm phút để hủy hoại nó. Nếu bạn nghĩ đến điều đó, bạn sẽ hành xử khác. (Warren Buffett)",
        " Nếu bạn tạo nên một trải nghiệm tuyệt vời, khách hàng sẽ kể với nhau về điều đó. Truyền miệng là sức mạnh. (Jeff Bezos)",
        " Chi phí phải trả cho sự sai lầm ít hơn so với việc không làm gì cả. (Seth Godin)",
        " Bạn sẽ có được tất cả mọi thứ bạn muốn trong cuộc sống, nếu bạn giúp người khác đạt được những gì họ muốn. (Zig Ziglar)",
        " Nếu bạn mơ về một điều gì đó, hãy hành động để biến nó thành sự thật. (Walt Disney)",
        " Dù sao bạn cũng phải suy nghĩ, hãy nghĩ những điều lớn lao. (Donald Trump)",
        " Để thành công, khao khát thành công của bạn phải lớn hơn nỗi sợ thất bại. (Bill Cosby)",
        " Tôi biết ơn những người đã nói không với mình. Nhờ họ mà tôi tự mình làm lấy mọi thứ. (Albeit Eistein)",
        " Cách duy nhất để tạo nên sự nghiệp vĩ đại là yêu những gì bạn làm. Nếu bạn chưa tìm ra nó, hãy tiếp tục tìm kiếm. Đừng dừng lại. (Steve Jobs)",
        " Đời giống như việc chụp ảnh. Bạn cần có những điểm mờ để tạo nên một bức hình đẹp. (Khuyết danh)",
        " Hãy xây nên giấc mơ của bạn, nếu không thì người khác sẽ thuê bạn xây giấc mơ của họ. (Farrah Gray)",
        " Thất bại lớn nhất bạn có thể gặp phải trong đời là mắc phải sai lầm không bao giờ cố gắng. (Khuyết danh)",
        " Hãy luôn giữ cho đôi mắt của bạn mở to và nhìn ngắm mọi thứ. Bởi vì bất cứ điều gì bạn nhìn thấy đều có thể truyền cảm hứng cho bạn. (Grace Coddington)",
        " Tôi tiêu diệt kẻ thù của mình bằng cách biến họ thành bạn bè. (Abraham Lincoln)",
        " Bạn sẽ thành công vì hầu hết mọi người đều lười biếng. (Shahir Zag)",
        " Đôi khi bạn giành chiến thắng, đôi khi bạn có được kinh nghiệm. (John Maxwell)",
        " Tôi chưa bao giờ mơ ước thành công. Tôi làm việc để thành công. (Estee Lauder)",
        " Bạn không thể để thất bại định hình mình. Bạn phải để thất bại tặng mình những bài học. (Barack Obama)",
        " Nếu bắt đầu thì có khả năng bạn sẽ nhận lấy thất bại, nhưng nếu không bắt đầu thì bạn đã thất bại rồi. (Barack Obama)",
        " Điều làm nên giá trị người đàn ông không chỉ là khả năng có con mà là khả năng nuôi dạy chúng. (Barack Obama)",
        " Chúng ta sống trong một thế giới mà kỹ năng giá trị nhất mà bạn có thể bán được là kiến thức. (Barack Obama)",
        " Thay đổi chẳng bao giờ dễ dàng, nhưng điều đó luôn luôn khả thi. (Barack Obama)",
        " Không gì có thể chặn đứng sức mạnh của hàng triệu tiếng nói đòi hỏi sự thay đổi. (Barack Obama)",
        " Thay đổi luôn xuất hiện từ những người bình thường làm những chuyện phi thường. (Barack Obama)",
        " Khi còn thở, nghĩa là ta còn hy vọng. (Barack Obama)",
        " Bất kể bạn đến từ đâu, bạn trông như thế nào hoặc bạn yêu thương ai, nếu làm việc chăm chỉ và đầy trách nhiệm, bạn sẽ gặt hái thành công. (Barack Obama)",
        " Nếu bạn đi đúng con đường và luôn luôn sẵn sàng bước tiếp, sớm muộn gì bạn cũng đạt được thành công. (Barack Obama)",
        " Thông điệp tôi muốn nhắc các bạn là: Hãy sáng tạo, hãy khát khao. Suy nghĩ đến những vấn đề rộng lớn hơn, hãy nghĩ về tương lai không xa. (Emmanuel Macron)",
        " Tôi tin tưởng vào ý tưởng của cá nhân, sự dũng cảm và dám đối mặt với rủi ro của bản thân. (Emmanuel Macron)",
        " Tôi có thể nhìn thấy tương lai của đất nước tôi. Và tôi không thể ngồi đó và nhìn thời gian trôi qua. (Emmanuel Macron)",
        ];

        var danhngon = danhNgonArr[Math.floor(Math.random()*danhNgonArr.length)];
        this.setState({
                   danhngon
                })  
 }         
   
     async  _clipboardDanhNgon() {
     
    Clipboard.setString(this.state.danhngon);
    ToastAndroid.show('Đã copy vào clipboard.', ToastAndroid.SHORT);

}
    render() {
        return (            
                       <TouchableOpacity onLongPress={()=>{this._clipboardDanhNgon()} } onPress={()=>{this._danhNgon()}}>
                           <Text> {this.state.danhngon}  </Text>
                      </TouchableOpacity>
                            
          );
    }
}



