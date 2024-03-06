import React from "react";
import "./Services.scss";
import { MainLayout } from "../../core";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import {
  AtticInsulation,
  ExternalInsulation,
  NewSheedRenew,
  services,
} from "../../router";
import { Titleroof } from "./slate/Slate";
import { Button } from "../../shared";
import { useLocation } from "react-router-dom";

import {
  SlateTileRoofs,
  FlatFiberglasRoofs,
  LeadFlashingChimneyRepoint,
  FaciaSoffitsGuttering,
  ExteriorInteriorPainting,
  TilingInDoorOutDoor,
} from "../../router";

export const Services = () => {
  let location = useLocation();
  const Url = location.pathname.split("/")[2];
  const CustomUrl = location.pathname.split("/")[3];

  console.log(CustomUrl);

  const pages = {
    roofing: "Roofing-Services",
    painting: "Painting-Tiling",
    paintingPaint: "Exterior-Interior-Painting",
    paintingTiling: "Tiling-InDoor-OutDoor",
    insulation: "Insulation",
    attic: "Attic-Insulation",
    external: "External-Insulation",
    sheed: "Sheed-Landscaping",
  };

  const pageChange = location.pathname;

  return (
    <MainLayout>
      <div id="services">
        <section className="sec1">
          <div className="back-img">
            <span>Services</span>
            <div className="opacity"></div>
          </div>
        </section>
        <section className="sec-2 container">
          {pages.roofing === Url && (
            <>
              <h3>Roofing Services</h3>
              <p>
                Think your roof may have suffered damage from a storm? Call a
                local roofing contractor with decades of experience working with
                storm damaged roofs and insurance companies. At KMConstruction
                roofing we don't door knock. Your home is your sanctuary! we
                only come if you invite us.
                <br />
                Don't feel pressured to sign with the first contractor that
                knocks at your door or calls your home. Do your research; you
                have time. Finding a legitimate contractor is key to ensuring
                you get the best possible roof.
              </p>
            </>
          )}
        </section>
        <section className="sec-3 container">
          {pages.roofing === Url && (
            <div className="nested-wrapper">
              <NavLink to={SlateTileRoofs}>Slate / Tile RooFs</NavLink>
              <NavLink to={FlatFiberglasRoofs}>
                {" "}
                Flat / Fiberglass RooFs
              </NavLink>
              <NavLink to={FaciaSoffitsGuttering}>
                Facia & Soffits / Guttering
              </NavLink>
              <NavLink to={LeadFlashingChimneyRepoint}>
                Lead Flashing / Chimney Repoint
              </NavLink>
            </div>
          )}
          {pages.painting === Url && (
            <div className="nested-wrapper">
              <NavLink to={ExteriorInteriorPainting}>
                EXTERIOR / INTERIOR PAINTING
              </NavLink>
              <NavLink to={TilingInDoorOutDoor}>
                TiliNG INDOOR / OUTDOOR
              </NavLink>
            </div>
          )}
          {pages.insulation === Url && (
            <div className="nested-wrapper">
              <NavLink to={ExternalInsulation}>EXTERNAL INSULATION</NavLink>
              <NavLink to={AtticInsulation}>ATTIC INSULATION</NavLink>
            </div>
          )}
          {pages.sheed === Url && (
            <div className="nested-wrapper">
              <NavLink to={NewSheedRenew}>New Sheed / Renew</NavLink>
            </div>
          )}

          <Outlet />
        </section>
        <section className="sec-4 container">
          {pages.roofing === Url && (
            <p>
              We take the hassle out of finding a roofing company in Dublin for
              flat roof repair and flat roof installation. We understand it is
              difficult to choose as there is many roofing company's within
              Dublin, However we ensure the highest quality work, the most
              competitive pricing and the highest grade of materials. When you
              choose KM Construction Roofing as your new roofing company in
              Dublin, our experienced team do all the hard work for you. Our
              team will manage the entire project from start to finish –
              including filling in all the documentation needed and working with
              your insurance company, if needed. We adhere to Irish building
              safety regulations We’re fully licensed and insured We are a
              trusted member of the National Guild of Master Craftsmen We
              arrange the scaffolding erection/removal We safely remove your old
              roof and dispose of it properly We make sure your property is left
              tidy and debris-free when the roof is finished.
              <br />
              <br />
              KM Construction roofing provide flat roof repair and flat roof
              installations services throughout Dublin North, Dublin South and
              Dublin county. Our team of expert roofers have over 25 years of
              experience installing flat roofs, fiberglass roofs, slate and
              tiled roofs and standard pitch roofs, completely customized and
              fitted to every job. During the installation of your new roof, our
              expert roofers can also install gutters and chimneys. We aim to
              complete your whole project in one go to ensure minimal
              disruption to your home!
            </p>
          )}
          {pages.painting === Url && (
            <>
              {pages.paintingPaint === CustomUrl && (
                <h3>EXTERIOR / INTERIOR PAINTING</h3>
              )}
              {pages.paintingTiling === CustomUrl && (
                <h3>TiliNG INDOOR / OUTDOOR</h3>
              )}
            </>
          )}
          {pages.insulation === Url && (
            <>
              {pages.attic === CustomUrl && <h3>Attic Insulation</h3>}
              {pages.external === CustomUrl && <h3>External Insulation</h3>}
            </>
          )}
          {pages.sheed === Url && <h3>SHEED / LANDSCAPING</h3>}
          {pages.painting === Url && (
            <>
              {pages.paintingPaint === CustomUrl && (
                <>
                  <p>
                    The KMConstruction has been operating as a painting company
                    for years, and we have great experience working with what
                    clients want and need. We pride ourselves on not only on the
                    quality of our painting services, but also on our customer
                    service. We are focused on building a relationship with our
                    clients in order to understand exactly what they want, to
                    ensure that we can provide the best results. We have
                    numerous testimonials from previous customers who also feel
                    as though we have provided them with some of the best
                    painting services Dublin. Another marker of The
                    KMConstruction ’ quality is our membership to the Guild of
                    Master Craftsmen. This membership is a marker of the best
                    painters Dublin. If you are looking for a highly skilled
                    painter decorator Dublin, you cannot go past our accredited
                    staff. As a company, we invest in our staff, to ensure that
                    we can provide our customers with a high level of service
                    that they can be satisfied with. As a result, we can offer
                    our clients some of the best professional painters Dublin.
                    It may seem tempting to try and complete painting jobs
                    yourself, but we always recommend the use of a professional
                    painter and decorator, in order to receive the best quality
                    results. We are also fully covered by comprehensive
                    liability insurance, so you know that you are safe in the
                    unlikely event something goes wrong. If you are still unsure
                    about the quality of The KM Construction , feel free to
                    browse our online gallery. We have a range of images of home
                    that we have renovated and redesigned for you to look at. If
                    you are stuck for ideas for your own space, it may also help
                    to gain inspiration from looking at some of the things that
                    we are capable of
                  </p>
                </>
              )}
              {pages.paintingTiling === CustomUrl && (
                <>
                  <p>
                    Dublin's Reputable and Effective Tilers Welcome to the KM
                    Construction. we are one of the leading tilers in Dublin.
                    With decades of experience, we specialise in providing
                    high-quality residential and commercial tiling services
                    across Dublin. Consistency and quality are at the heart of
                    everything we do, enabling us to become one of the most
                    prestigious tiling companies in Dublin. With decades of
                    tiling experience, our dynamic team has met virtually every
                    imaginable tiling request, established long-term
                    relationships with a host of customers and suppliers, and
                    developed a service unlike any tiling company in Dublin. We
                    place customer satisfaction and efficiency above all else
                    from small jobs to large-scale projects, ensurir - we
                    achieve a high standards , on budaet and on time
                  </p>
                </>
              )}
            </>
          )}
          {pages.insulation === Url && (
            <>
              {pages.attic === CustomUrl && (
                <>
                  <p>
                    Typical insulation materials used are semi-rigid insulation
                    boards as well as glass/mineral fibre. The insulation
                    material you choose may depend on the depth of your joists
                    or rafters. The optimum solution for your specific case
                    should be discussed with the Contractor. There are several
                    ‘multifoil’ products on the market that may achieve
                    impressive levels of insulation on their own. If you are
                    considering using a multifoil insulation in conjunction with
                    another insulation material, it is important to check any
                    installation requirements with the supplier and where
                    required the contractor should use an NSAI Agrément
                    certified product. Installing insulation properly is very
                    important. Where insulation is installed between rafters, it
                    is important that it is cut tight and is installed with no
                    gaps. Any gaps between the insulation and the rafters will
                    cause it to become ineffective, as heat loss will occur in
                    these areas. There is also a risk of condensation occuring
                    if rigid foam is not correctly installed. It is vital that
                    you look for high quality when choosing your insulation
                    product. The effectiveness of an insulating material is
                    measured using a ‘U-value’. This measures how much heat is
                    conducted through a material and how much heat passes
                    through your home. Correctly installed insulation will have
                    a low U-value, meaning that only small amounts of heat will
                    pass through, thus keeping your home warmer for longer.
                    Homeowners availing of the attic or rafter insulation grants
                    under the SEAI Better Energy Homes programme are required to
                    install insulation achieving the minimum required U-values
                    of 0.16 W/m2K for ceiling level insulation or 0.20 W/m2K for
                    rafter insulation.
                  </p>
                </>
              )}
              {pages.external === CustomUrl && (
                <>
                  <p>
                    The External insulation system can be made from a number of
                    different materials such as expanded polystyrene boards wood
                    fiber and mineral wool slabs which are all installed using
                    mechanical fixings to the outer surface of the wall. The
                    external insulation boards are then plastered with a special
                    layer of render to complete the system and provide thermal,
                    permeability and moisture resistance and performance. When
                    the external insulation system is installed to the property
                    it's also possible to completely change the look and finish
                    of the building. There are lots of different options on the
                    colours and different types of brick/stone and dry dashing
                    options, its also possible to do corners and window reveals
                    in special designs. External insulation systems also require
                    new window cill finish options. You will be presented with
                    both wall finish options and window finishes during a home
                    survey. The external insulation system when wrapped around
                    the property will protect it from cold weather whilst also
                    stopping the heat from escaping freely. Remember homes are
                    complex and can be very different when we survey your home
                    we don’t just do external insulation system we have all the
                    machinery to do all systems and will advise you accordingly.
                    That’s our business!!
                  </p>
                </>
              )}
            </>
          )}
          {pages.sheed === Url && (
            <>
              <p>
                Garden sheds are a must for most garden design. They provide
                much needed space and protection where the barbecue, lawnmower
                etc can be stored out of sight. The garden shed should become a
                feature within the garden offering depth, character and a place
                for a path to lead to, thus drawing you into the space.
                <br />
                Sheebeens
                <br />
                Garden Offices
                <br />
                Potting Sheds
                <br />
                Lean Too Sheds
                <br />
                Coal Bunkers
                <br />
                Dog Kennels
                <br />
                Patio Boxes
                <br />
                Bike Sheds
                <br />
                Shed Photo Gallery
                <br />
                <br />
                At KM Construction we supply and fit custom built garden sheds,
                offices, sheebeens etc for clients across Dublin. The materials
                we use are of the highest quality comprising of Scandinavian
                white deal for the sections and polyester unrippable felt for
                the roof. There are 2 paint types we use, Sadolins wood
                preservative for that traditional shed finish or Dulux colour
                trend for that bespoke finish. We have been designing and
                building garden sheds for the last 25 vears and have built up a
                reputation for durability, beauty and quality. Along with garden
                sheds we also build:
                <br />
                <br />
                Sheebeens Sheenbeens are a historic way to enjoy the company of
                family and friends in Ireland. Company is often enjoyed over a
                drink and good conversation. We design and build custom-made
                sheebeens that will provide a socialising epicenter for your
                garden and will provide endless days and nights of
                entertainment.
                <br />
                <br />
                Garden Offices Garden offices have surged in popularity since
                the beginning of the covid pandemic. The work-from home policies
                that many workers now enjoy have increased demand for garden
                offices. We design and build garden offices that are comfortable
                and functional places for work. The design will complement any
                garden and merge seamlessly into garden designs Potting Sheds
                Potting sheds are designed for gardeners as resting place and
                also to store gardening tools and materials. We can design and
                build a potting shed that is functional and aesthetic
                enhancement to any garden design.
                <br />
                <br />A lean too shed attaches to the side of an existing
                building. It is designed for storage and is used by house owners
                to store everything from bicycles to garden furniture. We
                construct lean too sheds that are both functional and add
                aesthetic value to your garden. Coal Bunkers Coal bunkers are
                used for storing coal. The difference with our coal bunkers is
                that they are an excellent complement to any garden which acts
                as a functional storage space for coal. We will take your design
                into consideration and work with you to design and build a coal
                bunker that works for your garden space. Dog kennels If you are
                home owner with a dog, you'll be delighted to know that we
                design and build dog kennels. We work with you to construct a
                kennel that you and your dog will love. We will also take the
                garden design and surroundings into consideration to ensure the
                dog kennels add to the garden design while acting as a
                functional outdoor home for your dog. Patio Boxes Patio boxes
                are used for storing everything from garden tools to patio
                furniture. We will design and build a patio box that enhances
                your patio space while acting as a functional outdoor storage
                unit. Bike Sheds Bike sheds are used to store bicyles for the
                whole family. We design and build bike sheds that are functional
                yet aesthetic to the eye. The colour, tone and style of the bike
                shed can compliment your garden and real value to your property.
              </p>
            </>
          )}
        </section>
      </div>
    </MainLayout>
  );
};
