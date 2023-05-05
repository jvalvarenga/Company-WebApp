import {Section} from '../hero/HeroElements'
import {
  LeadContainer,
  LeadContentText,
  LeadImageWrap,
  LeadImage,
  Button,
} from './LeadWallElements'

import ImageGallery from '/public/images/Gallery_2.jpg'

const LeadWall = () => {
  return (
    <>
      <Section>
        <LeadContainer>
          <LeadImageWrap>
            <LeadImage
              src={ImageGallery}
              alt="Art gallery full of people"
              object-fit="cover"
              placeholder="blur"
            />
          </LeadImageWrap>
          <LeadContentText>
            <h2>PUT YOUR NAME ON THE WALL</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi
              delectus repudiandae! Blanditiis quam dolores iste illo numquam
              exercitationem aliquam molestias dolorum?
            </p>
            <p className="lead_content_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At odit
              culpa molestias pariatur esse itaque soluta quaerat eligendi
              delectus repudiandae! Blanditiis quam dolores iste illo numquam
              exercitationem aliquam molestias dolorum?
            </p>
            <Button href="/advertising">Learn more</Button>
          </LeadContentText>
        </LeadContainer>
      </Section>
    </>
  )
}

export default LeadWall
