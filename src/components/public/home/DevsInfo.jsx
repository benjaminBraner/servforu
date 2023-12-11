import React from 'react'
import { testimonials, inner, row, col, testimonial, name } from '../../../scss/components/public/home/_DevsInfo.module.scss'
import julio from '../../../devsimgs/julio.jpg'
import josema from '../../../devsimgs/josema.jpeg'
import fabian from '../../../devsimgs/fabian.jpg'
import benja from '../../../devsimgs/benja.jpg'
export const DevsInfo = () => {
     return (
          <div className={testimonials}>
               <div className={inner}>
                    <h1>Desarrolladores</h1>

                    <div className={row}>
                         <div className={col}>
                              <div className={testimonial}>
                                   <img src={julio} alt="" />
                                   <div className={name}>Julio Guzman</div>
                                   <strong>@julioennoviembre</strong>
                                   <p>grj6001364@est.univalle.edu</p>
                                   <p>76852997</p>

                              </div>
                         </div>


                         <div className={col}>
                              <div className={testimonial}>
                                   <img src={josema} alt="" />
                                   <div className={name}>Josema Arze</div>
                                   <strong>@josemaecommerce</strong>
                                   <p>amj6001445@est.univalle.edu</p>
                                   <p>77614547</p>
                              </div>
                         </div>

                         <div className={col}>
                              <div className={testimonial}>
                                   <img src={fabian} alt="" />
                                   <div className={name}>Fabian Pando</div>
                                   <strong>@fbnpablo</strong>
                                   <p>pjf6000763@est.univalle.edu</p>
                                   <p>75582596</p>

                              </div>
                         </div>

                         <div className={col}>
                              <div className={testimonial}>
                                   <img src={benja} alt="" />
                                   <div className={name}>Ben Braner</div>
                                   <strong>@benjaminbraner</strong>
                                   <p>bmb6001059@est.univalle.edu</p>
                                   <p>76051713</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}




