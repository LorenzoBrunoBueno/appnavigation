import { ScrollView ,View, Text } from "react-native";
import styles from "../config/styles";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo1}>Immanuel Kant</Text>
          <Text>Immanuel Kant ou Emanuel Kant, foi um filósofo alemão (nativo do Reino da   Prússia) e um dos principais pensadores do Iluminismo. Seus abrangentes e sistemáticos trabalhos em epistemologia, metafísica, ética e estética fizeram dele uma das figuras mais influentes da filosofia ocidental moderna.
            Em sua doutrina do idealismo transcendental, Kant argumentou que o espaço e o tempo são meras "formas de intuição" que estruturam toda a experiência e que os objetos da experiência são meras "aparências". A natureza das coisas como elas são em si mesmas é incognoscível para nós. Em uma tentativa de contrariar o ceticismo, ele escreveu a Crítica da Razão Pura (1781/1787), sua obra mais conhecida. Kant traçou um paralelo com a revolução copernicana em sua proposta de pensar os objetos dos sentidos em conformidade com nossas formas espaciais e temporais de intuição e as categorias de nosso entendimento, de modo que tenhamos conhecimento a priori desses objetos.[a]
  
            Kant acreditava que a razão também é a fonte da moralidade e que a estética surge de uma faculdade de julgamento desinteressado. Ele foi um expoente da ideia de que a paz perpétua poderia ser assegurada por meio da democracia universal e da cooperação internacional, e que talvez este pudesse ser o estágio culminante da história mundial.[8]
  
            A natureza das visões religiosas de Kant continua a ser objeto de disputa acadêmica. Também controversos são os pontos de vista de Kant sobre raça. Ele defendeu o racismo científico durante grande parte de sua carreira, mas mudou seus pontos de vista sobre raça na última década de sua vida.
  
            Kant também publicou importantes obras sobre ética, religião, direito, estética, astronomia e história durante sua vida. Estes incluem a História Natural Universal (1755), a Crítica da Razão Prática (1788), a Crítica do Poder de Julgamento (1790), a Religião nos Limites da Mera Razão (1793) e a Metafísica dos Costumes (1797).
  
          </Text>
          <Text style={styles.titulo1}>Biografia</Text>
          <Text>Kant nasceu, viveu e morreu em Königsberg (atual Kaliningrado), na altura pertencente ao Reino da Prússia. Foi o quarto dos nove filhos de Johann Georg Kant, um artesão fabricante de correias (componente das carroças de então) e da mulher Regina. Nascido numa família protestante (luterana), teve uma educação austera numa escola pietista, que frequentou graças à intervenção de um pastor. Contudo, tornou-se muito cético relativamente à religião organizada na sua vida adulta embora preservasse a crença em Deus.[carece de fontes]
  
            Passou grande parte da adolescência como estudante, sólido mas não espetacular, preferindo o bilhar ao estudo. Tinha a convicção curiosa de que uma pessoa não podia ter uma direção firme na vida enquanto não atingisse os 39 anos. Com essa idade, era apenas um metafísico menor numa universidade prussiana, mas foi então que uma breve crise existencial o assomou. Pode argumentar-se que teve influência na posterior direção.[9]
  
          </Text>
        </ScrollView>
      </View>
    )
}